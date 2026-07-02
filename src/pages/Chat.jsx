import React, { useState, useEffect, useRef } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./Chat.css";

function Chat() {

  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();

  }, []);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [chat]);

  const sendMessage = () => {

    if (!message.trim()) return;

    const userMessage = {
      type: "user",
      text: message
    };

    setChat(prev => [...prev, userMessage]);

    setMessage("");

    setLoading(true);

    setTimeout(() => {

      setChat(prev => [
        ...prev,
        {
          type: "ai",
          text: "🤖 AI API will be connected in the next step."
        }
      ]);

      setLoading(false);

    }, 1000);

  };

  return (

    <div className="chat-page">

      <h1 className="chat-title">
        🤖 Zentra AI
      </h1>

      <div className="chat-box">

        {chat.map((item, index) => (

          <div
            key={index}
            className={
              item.type === "user"
                ? "message user-msg"
                : "message ai-msg"
            }
          >
            {item.text}
          </div>

        ))}

        {loading && (

          <div className="message ai-msg">
            Typing...
          </div>

        )}

        <div ref={messagesEndRef}></div>

      </div>

      <div className="chat-input-area">

        <input

          value={message}

          placeholder={
            "Message Zentra AI..."
          }

          onChange={(e) =>
            setMessage(e.target.value)
          }

          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}

        />

        <button onClick={sendMessage}>
          ➤
        </button>

      </div>

    </div>

  );

}

export default Chat;
