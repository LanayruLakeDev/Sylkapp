import OpenAi from "openai";

export const openai = new OpenAi({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: process.env.GROQ_BASE_URL,
});
