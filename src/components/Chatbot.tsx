'use client';

import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle, createContext, useContext } from 'react';
import { TbMessageCircle, TbX, TbSend, TbRobot } from 'react-icons/tb';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  customConfirm?: boolean;
  confirmData?: any;
}

export interface ChatbotHandle {
  openWithAppointmentConfirmation: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    reason: string;
  }) => void;
  openWithCustomMessage: (message: string) => void;
}

export const ChatbotContext = createContext<React.RefObject<ChatbotHandle> | null>(null);
export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    console.warn('useChatbot must be used within a ChatbotContext.Provider');
    return { current: null };
  }
  return context;
};

const Chatbot = forwardRef<ChatbotHandle>((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '¡Hola! Soy el asistente virtual de la Clínica Dental. ¿En qué puedo ayudarte hoy?',
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    openWithAppointmentConfirmation: (data) => {
      setIsOpen(true);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: `Hola ${data.firstName}, voy a proceder a agendar tu cita, ¿me podrías confirmar tus datos?\n\nNombre: ${data.firstName} ${data.lastName}\nCorreo: ${data.email}\nTeléfono: ${data.phone}\nMotivo de consulta: ${data.reason}`,
          isBot: true,
          timestamp: new Date(),
          customConfirm: true,
          confirmData: data,
        },
      ]);
    },
    openWithCustomMessage: (message: string) => {
      setIsOpen(true);
      setIsTyping(false);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString(),
          text: message,
          isBot: true,
          timestamp: new Date(),
        },
      ]);
    },
  }));

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Mensaje automático después de 30 segundos de inactividad
  useEffect(() => {
    if (!isOpen && messages.length === 1) {
      const timer = setTimeout(() => {
        setHasNewMessages(true);
      }, 30000); // 30 segundos

      return () => clearTimeout(timer);
    }
  }, [isOpen, messages.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simular respuesta del bot
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleConfirm = (data: any) => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        text: '¡Gracias por confirmar! Tu cita ha sido agendada. Pronto nos pondremos en contacto contigo.',
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('cita') || input.includes('agendar') || input.includes('reservar')) {
      return 'Para agendar una cita, puedes llamarnos al (123) 456-7890 o visitar nuestra sección de contacto. ¿Te gustaría que te ayude con algo más?';
    }
    
    if (input.includes('precio') || input.includes('costo') || input.includes('tarifa')) {
      return 'Los precios varían según el tratamiento. Te recomiendo agendar una consulta para una evaluación personalizada. ¿Te gustaría más información sobre algún servicio específico?';
    }
    
    if (input.includes('servicio') || input.includes('tratamiento')) {
      return 'Ofrecemos limpieza dental, ortodoncia, blanqueamiento, implantes, odontopediatría y atención de emergencias. ¿Cuál te interesa más?';
    }
    
    if (input.includes('horario') || input.includes('horarios')) {
      return 'Nuestro horario de atención es de lunes a viernes de 8:00 AM a 6:00 PM, y sábados de 8:00 AM a 2:00 PM.';
    }
    
    if (input.includes('dirección') || input.includes('ubicación') || input.includes('donde')) {
      return 'Nos encontramos en la Calle Principal #123, Ciudad. ¿Te gustaría que te envíe las indicaciones?';
    }
    
    return 'Gracias por tu mensaje. Si tienes alguna pregunta específica sobre nuestros servicios, horarios o quieres agendar una cita, estaré encantado de ayudarte.';
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50" aria-live="polite">
      {/* Botón flotante */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNewMessages(false);
        }}
        className={`w-14 h-14 md:w-16 md:h-16 bg-brand-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          hasNewMessages && !isOpen ? 'chatbot-pulse' : ''
        }`}
        aria-label="Abrir chat IA"
      >
        {isOpen ? (
          <TbX size={20} className="md:w-6 md:h-6" />
        ) : (
          <TbMessageCircle size={20} className="md:w-6 md:h-6" />
        )}
      </button>

      {/* Ventana de chat */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-72 h-80 md:w-80 md:h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col chatbot-enter">
          {/* Header */}
          <div className="bg-brand-primary text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <TbRobot size={20} />
              <span className="font-semibold">Asistente IA</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Cerrar chat"
            >
              <TbX size={20} />
            </button>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-brand-primary text-white'
                  }`}
                >
                  <p className="text-sm" style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                  {message.customConfirm && (
                    <button
                      className="mt-4 px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
                      onClick={() => handleConfirm(message.confirmData)}
                    >
                      Confirmar y agendar
                    </button>
                  )}
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                disabled={isTyping}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className="px-4 py-2 bg-brand-primary text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensaje"
              >
                <TbSend size={18} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
});

export default Chatbot; 