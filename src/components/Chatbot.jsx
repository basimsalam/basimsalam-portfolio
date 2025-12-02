// import { useState } from "react";
// import { MessageCircle, X } from "lucide-react"; // For icons (make sure lucide-react is installed)

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hello! How can I help you today?" },
//   ]);
//   const [input, setInput] = useState("");

//   const handleSend = () => {
//     if (!input.trim()) return;
//     setMessages([...messages, { sender: "user", text: input }]);
//     setInput("");
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         { sender: "bot", text: "I’ll get back to you on that!" },
//       ]);
//     }, 800);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Chat Button */}
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
//         >
//           <MessageCircle size={28} />
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="w-80 h-96 bg-gray-900 text-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-700">
//           {/* Header */}
//           <div className="flex justify-between items-center bg-blue-600 px-4 py-3">
//             <h2 className="text-lg font-semibold">Chatbot</h2>
//             <button onClick={() => setIsOpen(false)} className="text-white">
//               <X size={20} />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-3 space-y-2">
//             {messages.map((msg, i) => (
//               <div
//                 key={i}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`px-3 py-2 rounded-lg max-w-[75%] ${
//                     msg.sender === "user"
//                       ? "bg-red-600 text-white"
//                       : "bg-gray-700 text-gray-100"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input Area */}
//           <div className="flex p-2 border-t border-gray-700">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none text-sm"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />
//             <button
//               onClick={handleSend}
//               className="ml-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm"
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


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
      // Call HuggingFace API
      const res = await fetch(
        "https://basimsalam-chatbot-me.hf.space/ask",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: userMsg })
        }
      );

      const data = await res.json();

      // Add bot reply
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: data.answer }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Error connecting to server. Please try again."
        }
      ]);
    }

    setLoading(false);
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
        <div className="w-80 h-96 bg-gray-900 text-white rounded-2xl shadow-lg flex flex-col overflow-hidden border border-gray-700">
          
          {/* Header */}
          <div className="flex justify-between items-center bg-blue-600 px-4 py-3">
            <h2 className="text-lg font-semibold">Chatbot</h2>
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
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
                      ? "bg-red-600 text-white"
                      : "bg-gray-700 text-gray-100"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {loading && (
              <p className="text-gray-400 text-sm">Bot is typing...</p>
            )}
          </div>

          {/* Input area */}
          <div className="flex p-2 border-t border-gray-700">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 rounded-lg bg-gray-800 text-white outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-2 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm"
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
