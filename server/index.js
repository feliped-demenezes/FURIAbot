import OpenAI from "openai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1" 
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/chat", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Mensagem vazia" });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "openai/gpt-3.5-turbo", // modelo do OpenRouter
      messages: [
        {
          role: "system",
          content: "Você é um bot que torce fanaticamente para a FURIA Esports."
        },
        {
          role: "user",
          content: message
        }
      ]
    });

    const reply = completion.choices[0].message.content;
    return res.json({ reply });
  } catch (err) {
    console.error("Erro na chamada OpenRouter:", err.response?.data || err.message || err);
    return res.status(500).json({ error: "Erro ao se comunicar com a IA" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
