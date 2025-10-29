
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    service: '',
    description: '',
    dateTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to a backend or email service
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      contact: '',
      email: '',
      service: '',
      description: '',
      dateTime: ''
    });
    setTimeout(() => setIsSubmitted(false), 5000); // Reset message after 5 seconds
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-slate-800">Agende seu Orçamento</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Preencha o formulário abaixo e entrarei em contato o mais breve possível.</p>
          <div className="mt-4 w-24 h-1 bg-orange-500 mx-auto rounded"></div>
        </div>
        <div className="max-w-2xl mx-auto bg-slate-50 p-8 rounded-lg shadow-xl border border-slate-200">
          {isSubmitted ? (
            <div className="text-center p-8 bg-green-100 text-green-800 rounded-lg">
              <h3 className="text-2xl font-bold">Obrigado!</h3>
              <p className="mt-2">Sua solicitação foi enviada com sucesso. Entrarei em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Nome Completo</label>
                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="contact" className="block text-sm font-medium text-slate-700">Telefone / WhatsApp</label>
                <input type="tel" name="contact" id="contact" required value={formData.contact} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">E-mail</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-700">Serviço de Interesse</label>
                <select id="service" name="service" required value={formData.service} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500">
                  <option value="">Selecione um serviço</option>
                  <option>Alvenaria Estrutural</option>
                  <option>Revestimentos e Pisos</option>
                  <option>Construção do Zero</option>
                  <option>Fundações e Lajes</option>
                  <option>Reformas em Geral</option>
                  <option>Acabamentos Finos</option>
                  <option>Outro</option>
                </select>
              </div>
               <div>
                <label htmlFor="dateTime" className="block text-sm font-medium text-slate-700">Data e Hora Preferencial para Visita</label>
                <input type="datetime-local" name="dateTime" id="dateTime" value={formData.dateTime} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700">Breve Descrição do Serviço</label>
                <textarea id="description" name="description" rows={4} required value={formData.description} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300">
                  Enviar Pedido de Orçamento
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
