import type { ChatCompletionRequestMessage } from 'openai';
import { Configuration, OpenAIApi } from 'openai';

const apiClient = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));

export async function createChatCompletion(messages: ChatCompletionRequestMessage[]): Promise<string> {
  const response = await apiClient.createChatCompletion({
    model: 'gpt-3.5-turbo',
    temperature: 0,
    messages,
  });
  if (response.data.choices.length) {
    const firstMessage = response.data.choices[0].message;
    if (firstMessage) {
      return firstMessage.content;
    }
  }
  throw new Error('Failed to get response from OpenAI service.');
}
