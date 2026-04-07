import { OLLAMA_BASE_URL, OLLAMA_MODEL } from "../config/env.js";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: "ollama",
  baseURL: OLLAMA_BASE_URL,
});

async function ollamaPost(messages) {
  let messagesWithSystemPrompt = [];

  messagesWithSystemPrompt = [
    {
      role: "system",
      content:
        "You are a helpful assistant. Don't answer questions that are not related to the user's query and be genuine and proper in your responses.",
    },
    ...messages,
  ];

  const response = await client.chat.completions.create({
    model: OLLAMA_MODEL,
    messages: messagesWithSystemPrompt,
    max_tokens: 1000,
  });

  return response.choices[0].message.content;
}

export default ollamaPost;
