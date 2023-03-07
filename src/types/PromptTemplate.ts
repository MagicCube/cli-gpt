import type { ChatCompletionRequestMessage } from 'openai';

export interface PromptTemplate {
  messages: ChatCompletionRequestMessage[];
}
