// src/config/gemini.js

import { GoogleGenAI } from "@google/genai"; // ✅ Use only this
import GEMINI_API_KEY from "./env"; // ✅ Your key

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY }); // Fix key param name

// ✅ This function now accepts a dynamic prompt
async function runChat(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text; // ✅ Return the result for use in React
}

// ✅ Export the function itself, not its execution
export default runChat;
