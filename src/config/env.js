const PORT = process.env.PORT || 4000;
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || "http://localhost:11434";
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || "llama3.2";

export { PORT, OLLAMA_BASE_URL, OLLAMA_MODEL };
