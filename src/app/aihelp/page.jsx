"use client";

import React, { useState, useRef, useEffect } from "react";
import { Loader2, Send, Info } from "lucide-react";

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch response");
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.response,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I encountered an error. Please try asking your question again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="p-4 bg-red-700 text-white shadow-md">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div>
            <h1 className="text-xl font-semibold">Blood Donation Assistant</h1>
            <p className="text-sm text-red-100">
              Your personal guide to blood donation
            </p>
          </div>
          <div className="flex items-center space-x-1 text-sm bg-red-800 px-3 py-1 rounded-full">
            <Info className="h-4 w-4" />
            <span>Medical Disclaimer</span>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 my-8 max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              Welcome to your Blood Donation Assistant! 👋
            </p>
            <p className="mt-2">
              I'm here to help you with all your blood donation questions and
              concerns.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-red-700 mb-2">
                  Common Questions
                </h3>
                <ul className="space-y-2 text-sm text-center">
                  <li>"Am I eligible to donate blood?"</li>
                  <li>"What should I do before donating?"</li>
                  <li>"How often can I donate?"</li>
                  <li>"What happens during donation?"</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-medium text-red-700 mb-2">
                  Medical Concerns
                </h3>
                <ul className="space-y-2 text-sm text-center">
                  <li>"Is it safe to donate?"</li>
                  <li>"What if I'm on medication?"</li>
                  <li>"How long does recovery take?"</li>
                  <li>"What are the side effects?"</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-3xl p-4 rounded-lg ${
                message.role === "user"
                  ? "bg-red-600 text-white"
                  : "bg-white shadow-md"
              }`}
            >
              <div className="prose prose-sm">
                {message.content.split("\n").map((line, i) => (
                  <p
                    key={i}
                    className={`${
                      message.role === "user" ? "text-white" : "text-gray-800"
                    } mb-2`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Loader2 className="h-5 w-5 animate-spin text-red-600" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask any question about blood donation..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}
