import OpenAI from "openai";

const API_KEY = "";

async function runChat(prompt) {
  const client = new OpenAI({
    apiKey: API_KEY,
    baseURL: "https://api.deepseek.com",
    dangerouslyAllowBrowser: true,
  });

  try {
    const completion = await client.chat.completions.create({
      model: "deepseek-chat",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.9,
      max_tokens: 2048,
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek API Error:", error);
    throw error;
  }
}

export default runChat;
