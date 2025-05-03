
import { useState } from "react";
import axios from "axios";

function Chat() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: "Olá! Eu sou o FURIAbot. Bora falar sobre a FURIA? 😎", sender: "bot" }
  ]);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    try {
      const response = await axios.post("https://furia-mauve.vercel.app/", {
        message: input
      });
      setMessages(prev => [...prev, { text: response.data.reply, sender: "bot" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { text: "Erro ao falar com a IA 😢", sender: "bot" }]);
    }
  };

  return (
    <>
      <div className="messages-container">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`message-bubble ${msg.sender === "user" ? "user-bubble" : "bot-bubble"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          placeholder="Fale com a FURIA!"
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </>
  );
}

export default Chat;
