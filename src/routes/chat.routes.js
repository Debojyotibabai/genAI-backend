import { Router } from "express";
import ollamaPost from "../services/ollama.service.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { messages } = req.body;
    const data = await ollamaPost(messages);

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Ollama API error:", error);

    return res.status(500).json({
      success: false,
      message:
        error.message || "Something went wrong while fetching AI response.",
    });
  }
});

export default router;
