import { createChatCompletion } from '../open-ai';
import { generatePromptMessages } from '../prompt';
import type { CommandLine } from '../types';

export async function translate(input: string): Promise<CommandLine> {
  const inputMessages = await generatePromptMessages(input);
  const outputMessage = await createChatCompletion(inputMessages);

  let content = outputMessage;
  let isDangerous = false;
  if (outputMessage.endsWith('\nDANGEROUS')) {
    isDangerous = true;
    content = outputMessage.slice(0, -10);
  }
  if (content.startsWith('>')) {
    return { content: content.slice(1), isDangerous };
  }
  throw new Error('Failed to translate the command.');
}
