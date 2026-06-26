import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  async function sendMessage() {
    if (!message.trim()) return;

    const userMessage = message;

    setChat((old) => [
      ...old,
      { role: "user", text: userMessage }
    ]);

    setMessage("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: userMessage
      })
    });

    const data = await res.json();

    setChat((old) => [
      ...old,
      { role: "ai", text: data.reply }
    ]);
  }


  return (
    <div className="chat-container">

      <h1>Zentra AI 🤖</h1>

      <div className="chat-box">
        {chat.map((msg,index)=>(
          <p key={index}>
            <b>{msg.role}:</b> {msg.text}
          </p>
        ))}
      </div>


      <input
        value={message}
        placeholder="Message..."
        onChange={(e)=>setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>
        Send
      </button>

    </div>
  );
}

export default Chat;
