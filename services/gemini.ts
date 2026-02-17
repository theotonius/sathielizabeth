
import { GoogleGenAI, Type } from "@google/genai";

// Safe access to process.env to prevent top-level crashes in some browser environments
const getApiKey = () => {
  try {
    return process.env.API_KEY || '';
  } catch (e) {
    return '';
  }
};

export const generateMarketingCopy = async (topic: string, goal: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a professional digital marketing expert assistant. 
      Generate a persuasive marketing copy in English for: ${topic}. 
      The goal of this content is: ${goal}. 
      Keep it professional, catchy, and concise.`,
    });
    return response.text || "No response from AI.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Sorry, I couldn't generate the copy. Please check your connection or API key.";
  }
};

export const getSiteUpdateSuggestion = async (currentData: any, updateType: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: getApiKey() });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `I want to update my digital marketing portfolio website's ${updateType} section. 
      Current data: ${JSON.stringify(currentData)}.
      Suggest 3 better, high-converting alternatives in English.`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.STRING
          }
        }
      }
    });
    return JSON.parse(response.text || '[]');
  } catch (error) {
    console.error("Gemini Suggestion Error:", error);
    return [];
  }
};
