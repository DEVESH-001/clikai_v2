"use client";
import { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX, FiSend, FiClock } from "react-icons/fi";

interface ChatMessage {
  sender: "User" | "AI";
  text: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [userInput, setUserInput] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    { sender: "AI", text: "Welcome to Clik.ai! How can I assist you today?" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewingHistory, setViewingHistory] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);
  const chatBoxRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setChatHistory((prevHistory) => [
      ...prevHistory,
      { sender: "User", text: userInput },
    ]);
    setUserInput("");

    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "AI", text: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (chatEndRef.current && !isLoading && !viewingHistory) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isLoading, viewingHistory]);

  // Handle resizing
  const handleMouseDown = (e: React.MouseEvent) => {
    const chatBox = chatBoxRef.current;
    if (!chatBox) return;

    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = chatBox.offsetWidth;
    const startHeight = chatBox.offsetHeight;

    const doDrag = (dragEvent: MouseEvent) => {
      chatBox.style.width = `${startWidth + dragEvent.clientX - startX}px`;
      chatBox.style.height = `${startHeight + dragEvent.clientY - startY}px`;
    };

    const stopDrag = () => {
      document.removeEventListener("mousemove", doDrag);
      document.removeEventListener("mouseup", stopDrag);
    };

    document.addEventListener("mousemove", doDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const formatResponse = (text: string) => {
    // Example: Convert newlines to <br> for HTML rendering
    return text.replace(/\n/g, "<br>");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg"
        >
          <FiMessageSquare size={24} />
        </button>
      ) : (
        <div
          ref={chatBoxRef}
          className="bg-white rounded-lg shadow-xl w-96 h-[500px] flex flex-col resize"
          style={{ resize: "both", overflow: "auto" }}
        >
          <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with AI</h3>
            <div className="flex gap-2">
              <button
                onClick={() => setViewingHistory(!viewingHistory)}
                className="hover:bg-blue-700 rounded-full p-1"
              >
                <FiClock size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-blue-700 rounded-full p-1"
              >
                <FiX size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {viewingHistory ? (
              <div>
                <h4 className="font-semibold mb-2">Chat History</h4>
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "User" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "User"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "14px",
                      }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {chatHistory.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${
                      msg.sender === "User" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "User"
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100"
                      }`}
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontSize: "14px",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: formatResponse(msg.text),
                      }}
                    />
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-gray-100">
                      Typing...
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </>
            )}
          </div>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700"
              >
                <FiSend size={20} />
              </button>
            </div>
          </div>
          <div
            className="absolute bottom-0 right-0 w-4 h-4 cursor-se-resize"
            onMouseDown={handleMouseDown}
          />
        </div>
      )}
    </div>
  );
}

