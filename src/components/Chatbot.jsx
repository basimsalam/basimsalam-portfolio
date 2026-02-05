import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    setLoading(true);

    try {
      const res = await fetch(
        "https://basimsalam-chatbot-me.hf.space/ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ query: userMsg }),
        }
      );

      if (!res.ok) {
        // Handle HTTP errors
        if (res.status === 402) {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "⚠️ Sorry the chatbot is currently unavailable.",
            },
          ]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: `⚠️ Error ${res.status}: ${res.statusText}`,
            },
          ]);
        }
        return; // Stop further execution
      }

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.answer || "No response from server." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Error connecting to server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-300 dark:border-gray-700">
          
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 px-4 py-3">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2 bg-gray-50 dark:bg-gray-800">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-2 rounded-lg max-w-[75%] ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-gray-500 dark:text-gray-400 text-sm">Bot is typing...</p>
            )}
          </div>

          {/* Input area */}
          <div className="flex p-2 border-t border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 outline-none text-sm border border-gray-300 dark:border-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
              disabled={loading}
            >
              Send
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default Chatbot;
