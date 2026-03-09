
import { GoogleGenAI } from "@google/genai";

export async function getROIConsultation(userQuery: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are the AI assistant for "Gianluca Grassi", a Senior Product Designer focused on ROI.
    Your goal is to explain how UX design directly impacts business metrics like revenue, retention, and conversion.
    Be professional, concise, and minimalist in your tone. 
    Focus on numbers and business outcomes.
    If asked about Gianluca Grassi's projects, refer to "E-commerce Redesign (+42% revenue)", "FinTech Dashboard (-30% support)", and "Onboarding Flow (2x retention)".
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: userQuery,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm sorry, I'm having trouble connecting to my ROI data right now. Please try again or contact me directly.";
  }
}