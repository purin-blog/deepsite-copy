import { createOpenAICompatible } from '@ai-sdk/openai-compatible';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// 创建 DeepSeek 提供者实例
export const provider = createOpenAICompatible({
  name: 'deepseek',
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json'
  }
}); 