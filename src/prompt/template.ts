import * as fs from 'node:fs/promises';
import * as os from 'node:os';
import * as readline from 'node:readline';
import * as stream from 'node:stream';
import type { ChatCompletionRequestMessage } from 'openai';

import type { PromptTemplate } from '../types';

export async function loadPromptTemplate(path: string) {
  return new Promise<PromptTemplate>(async (resolve) => {
    const messages: ChatCompletionRequestMessage[] = [];
    const saveCurrentMessage = () => {
      if (currentMessage) {
        currentMessage.content = currentMessage.content.trim();
        currentMessage.content = currentMessage.content.replace('${OS}', os.platform());
        messages.push(currentMessage);
        currentMessage = null;
      }
    };

    const buffer = await fs.readFile(path);
    const bufferStream = new stream.PassThrough({ encoding: 'utf-8' });
    bufferStream.end(buffer);

    const rl = readline.createInterface({ input: bufferStream });
    let currentMessage: ChatCompletionRequestMessage | null = null;
    rl.on('line', (line) => {
      if (line.startsWith('# ')) {
        saveCurrentMessage();
        currentMessage = {
          role: line.substring(2).trim().toLowerCase() as 'user' | 'assistant' | 'system',
          content: '',
        };
      } else if (currentMessage) {
        const text = line.trim();
        if (text !== '') {
          currentMessage.content += line + '\n';
        }
      }
    });
    rl.on('close', () => {
      saveCurrentMessage();
      resolve({ messages });
    });
  });
}
