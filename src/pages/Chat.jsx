import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    setMessages(prev => [...prev, { text: message, user: true }]);
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=TUMHARI_API_KEY_YAHAN", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: message }] }]
        })
      });

      const data = await res.json();
      const reply = data.candidates[0].content.parts[0].text;

      setMessages(prev => [...prev, { text: reply, user: false }]);

    } catch (error) {
      setMessages(prev => [...prev, { text: "Error aa gaya!", user: false }]);
    }

    setLoading(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") sendMessage();
  }

  return (
    <div className="chat-page">
      <h1>Zentra AI Chat 🤖</h1>

      <div className="chat-box">
        {messages.map((msg, index) => (
          <p key={index} style={{ textAlign: msg.user ? "right" : "left" }}>
            <strong>{msg.user ? "You" : "AI"}:</strong> {msg.text}
          </p>
        ))}
        {loading && <p>AI soch raha hai... ⏳</p>}
      </div>

      <div className="chat-input">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything..."
        />
        <button onClick={sendMessage} disabled={loading}>
          {loading ? "..." : "Send"}
        </button>
      </div>
    </div>
  );
}
