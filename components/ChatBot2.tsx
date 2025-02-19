"use client";

import { useState } from "react";

export function ChatBot2() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-gray-900 transition-colors"
        >
          Chat with AI
        </button>
      ) : (
        <div className="bg-white rounded-lg shadow-xl">
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3>AI Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-lg">
              &times;
            </button>
          </div>

          <iframe
            src="https://www.openassistantgpt.io/embed/cm7boek4r0001mnnljbtxl4zc/window?chatbox=false"
            style={{
              overflow: "hidden",
              height: "80vh",
              width: "480px",
              bottom: "-30px",
              border: "2px solid #e2e8f0",
              borderRadius: "0.375rem",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            allowFullScreen
            allow="clipboard-read; clipboard-write"
          />
          {/* This chatbot is build using https://openassistantgpt.io/ */}
        </div>
      )}
    </div>
  );
}
