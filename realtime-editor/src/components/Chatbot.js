import React, { useState } from 'react';
import './Chatbot.css'; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! I am your friendly chatbot. How can I assist you today?' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  
  const sendMessage = () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInput('');

    
    const botResponse = generateBotResponse(input);
    if (botResponse) {
      const botMessage = { sender: 'bot', text: botResponse };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }
  };

  
  const generateBotResponse = (userInput) => {
    const normalizedInput = userInput.toLowerCase();

    if (normalizedInput.includes('hello') || normalizedInput.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (normalizedInput.includes('help')) {
      return 'Sure, I am here to help! You can ask me about our services, pricing, or any other inquiries.';
    } else if (normalizedInput.includes('thank')) {
      return "You're welcome! If you have any more questions, feel free to ask.";
    } else {
      return "I'm sorry, I didn't understand that. Could you please rephrase?";
    }
  };

  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  
  const clearChat = () => {
    setMessages([
      { sender: 'bot', text: 'Hello 👋 Im here to assist you' },
    ]);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-open-button" onClick={toggleChatbot}>
          💬 Chat
        </button>
      )}
      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <h4>Sync assit</h4>
            <div className="chatbot-header-buttons">
              <button className="chatbot-clear-button" onClick={clearChat}>
                🗑️ 
              </button>
              <button className="chatbot-close-button" onClick={toggleChatbot}>
                ✖
              </button>
            </div>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
