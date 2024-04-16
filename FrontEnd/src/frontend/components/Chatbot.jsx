import React, { useState } from "react";
import "../css-assets/Chatbot.css";


const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { type: "user", text: input }]);
    setInput("");

    // Simulate a response from the chatbot (you can replace this with an API call)
    setTimeout(() => {
      setMessages([
        ...messages,
        { type: "bot", text: `Hi! I'm a React chatbot. You said: ${input}` },
      ]);
    }, 500);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((message, index) => (
          <div key={index} className={message.type}>
            <span>{message.type === "user" ? "You: " : "Chatbot: "}</span>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          placeholder="Type your message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
