
import React, { useState } from 'react';
import { generateConstructionIdeas } from '../services/geminiService';
import { LightbulbIcon, SparklesIcon } from './IconComponents';

const IdeaGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [ideas, setIdeas] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Por favor, descreva sua ideia de projeto.');
      return;
    }
    setError('');
    setIsLoading(true);
    setIdeas('');

    const result = await generateConstructionIdeas(prompt);
    
    // Simple markdown to HTML conversion for lists and bold text
    const formattedResult = result
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/### (.*)/g, '<h3 class="text-lg font-semibold mt-4 mb-2">$1</h3>')
        .replace(/\* (.*)/g, '<li class="ml-5 list-disc">$1</li>');

    setIdeas(formattedResult);
    setIsLoading(false);
  };

  return (
    <section id="idea-generator" className="py-20 bg-slate-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
            <LightbulbIcon />
            <h2 className="text-4xl font-extrabold">Gerador de Ideias com IA</h2>
        </div>
        <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
          Está sem inspiração? Descreva seu projeto abaixo e deixe a inteligência artificial te dar algumas ideias criativas!
        </p>
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-2 flex flex-col sm:flex-row gap-2 shadow-lg">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Quero construir uma churrasqueira no meu quintal..."
              className="w-full p-3 text-slate-700 rounded-md focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
              rows={3}
            />
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300 disabled:bg-orange-300 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Gerando...
                </>
              ) : (
                <>
                  <SparklesIcon />
                  Gerar Ideias
                </>
              )}
            </button>
          </div>
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </div>
        {ideas && (
          <div className="mt-8 max-w-3xl mx-auto bg-slate-700 p-6 rounded-lg text-left shadow-inner">
             <div dangerouslySetInnerHTML={{ __html: ideas }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default IdeaGenerator;
