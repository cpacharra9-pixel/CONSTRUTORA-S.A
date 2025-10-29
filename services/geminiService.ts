
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will fail.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateConstructionIdeas = async (prompt: string): Promise<string> => {
  if (!API_KEY) {
    return "Erro: A chave da API do Gemini não foi configurada. Por favor, configure a variável de ambiente API_KEY.";
  }
  
  try {
    const fullPrompt = `Você é um mestre de obras experiente e criativo. Um cliente pediu ideias para o seguinte projeto: "${prompt}". Forneça uma lista de 3 a 5 sugestões, dicas ou ideias criativas para este projeto. Formate sua resposta em markdown, usando títulos e listas para facilitar a leitura.`;
    
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating ideas with Gemini API:", error);
    return "Desculpe, ocorreu um erro ao gerar as ideias. Por favor, tente novamente mais tarde.";
  }
};
