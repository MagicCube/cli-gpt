import * as path from 'node:path';
import type { ChatCompletionRequestMessage } from 'openai';

import type { PromptTemplate } from '../types';

import { loadPromptTemplate } from './template';

let template: PromptTemplate | undefined;

export async function generatePromptMessages(input: string): Promise<ChatCompletionRequestMessage[]> {
  if (!template) {
    template = await loadPromptTemplate(path.resolve(__dirname, '../../prompt-template/default.md'));
  }
  return [
    ...template.messages,
    {
      role: 'user',
      content: input,
    },
  ];
}
