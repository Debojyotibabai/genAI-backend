import { OLLAMA_BASE_URL, OLLAMA_MODEL } from "../config/env.js";

async function ollamaPost(messages) {
  const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      messages,
      max_tokens: 1000,
      stream: false,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    const message = data?.error || "Ollama request failed";
    throw new Error(message);
  }

  return data?.message?.content || "";
}

export default ollamaPost;
