"use client";
import React, { useRef } from "react";
import Chatbot, { ChatbotContext, ChatbotHandle } from "@/components/Chatbot";
import AppointmentForm from '@/sections/AppointmentForm';

export default function ClientWrapper({ children }: { children?: React.ReactNode }) {
  const chatbotRef = useRef<ChatbotHandle>(null);
  
  return (
    <ChatbotContext.Provider value={chatbotRef}>
      {children}
      <AppointmentForm />
      <Chatbot ref={chatbotRef} />
    </ChatbotContext.Provider>
  );
} 