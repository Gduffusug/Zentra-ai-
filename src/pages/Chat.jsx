import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function sendMessage() {
    if (!message) return;

    // User message add karo
    const userMsg = { text: message, user: true };
    setMessages(prev => [...prev, userMsg]);
    setMessage("");
    setLoading(true);

    try {
      // API call karo
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      // AI reply add karo
      setMessages(prev => [...prev, { text: data.reply, user: false }]);

    } catch (error) {
      setMessages(prev => [...prev, { text: "Error aa gaya, dobara try karo!", user: false }]);
    }

    setLoading(false);
  }

  // Enter key se bhi send ho
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
