import React, {
  useState,
  useEffect,
  useRef
} from "react";

import "./Chat.css";

import {
  auth
} from "../firebase";

import {
  onAuthStateChanged
} from "firebase/auth";

function Chat() {

  const [user, setUser] = useState(null);

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([]);

  const [loading, setLoading] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [chatTitle, setChatTitle] = useState("New Chat");

  const [history, setHistory] = useState([]);

  const [suggestions] = useState([
    "Explain Quantum Physics",
    "Write a Professional Email",
    "Create a Resume",
    "Generate Business Ideas"
  ]);

  const messagesEndRef = useRef(null);

  const inputRef = useRef(null);

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(
        auth,
        (currentUser) => {

          setUser(currentUser);

        }
      );

    return () => unsubscribe();

  }, []);

  useEffect(() => {

    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth"
    });

  }, [chat]);
const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {

      id: Date.now(),

      type: "user",

      text: message,

      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })

    };

    setChat(prev => [...prev, userMessage]);

    setMessage("");

    setLoading(true);

    try {

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: userMessage.text
    })
  });

  const data = await response.json();

  const aiMessage = {
    id: Date.now() + 1,
    type: "ai",
    text: data.reply,
    time: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })
  };

  let currentText = "";

const typingMessage = {
  ...aiMessage,
  text: ""
};

setChat(prev => [...prev, typingMessage]);

const words = data.reply.split(" ");

for (let i = 0; i < words.length; i++) {

  currentText += words[i] + " ";

  await new Promise(resolve =>
    setTimeout(resolve, 20)
  );

  setChat(prev => {

    const updated = [...prev];

    updated[updated.length - 1] = {
      ...typingMessage,
      text: currentText
    };

    return updated;

  });

}

} catch (err) {

  setChat(prev => [
    ...prev,
    {
      id: Date.now() + 1,
      type: "ai",
      text: "❌ AI server is unavailable.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })
    }
  ]);

}

setLoading(false);

  };

  const startNewChat = () => {

    if (chat.length > 0) {

      setHistory(prev => [

        {
          id: Date.now(),
          title: chatTitle,
          messages: chat.length
        },

        ...prev

      ]);

    }

    setChat([]);

    setChatTitle("New Chat");

    setMessage("");

    inputRef.current?.focus();

  };

  const useSuggestion = (text) => {

    setMessage(text);

    inputRef.current?.focus();

  };
return (

    <div className="chat-page">

      {/* Animated Background */}

      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>
      <div className="bg-orb orb3"></div>

      {/* Sidebar */}

      <aside className={sidebarOpen ? "sidebar open" : "sidebar"}>

        <div className="sidebar-top">

          <div className="logo">

            <span className="logo-icon">⚡</span>

            <div>

              <h2>Zentra AI</h2>

              <p>Liquid Glass</p>

            </div>

          </div>

          <button

            className="new-chat-btn"

            onClick={startNewChat}

          >

            ＋ New Chat

          </button>

        </div>

        <div className="history">

          <h4>Recent Chats</h4>

          {

            history.length === 0 ?

            (

              <p className="empty-history">

                No chats yet

              </p>

            )

            :

            (

              history.map(item => (

                <div

                  key={item.id}

                  className="history-card"

                >

                  💬 {item.title}

                </div>

              ))

            )

          }

        </div>

        <div className="sidebar-user">

          <div className="avatar">

            👤

          </div>

          <div>

            <h4>

              {user?.displayName || "Guest"}

            </h4>

            <span>

              AI Workspace

            </span>

          </div>

        </div>

      </aside>

      {/* Main Chat */}

      <main className="chat-main">
{/* Header */}

        <header className="chat-header">

          <div className="header-left">

            <button

              className="menu-btn"

              onClick={() =>
                setSidebarOpen(!sidebarOpen)
              }

            >
              ☰
            </button>

            <div>

              <h2>{chatTitle}</h2>

              <p>

                <span className="status-dot"></span>

                Zentra AI is Online

              </p>

            </div>

          </div>

          <div className="header-right">

            <select className="model-select">

              <option>Groq Llama 3</option>

              <option>Gemma 2</option>

              <option>DeepSeek R1</option>

              <option>Mixtral</option>

            </select>

          </div>

        </header>

        {/* Chat Container */}

        <div className="chat-container">
{

            chat.length === 0 ?

            (

              <div className="welcome-screen">

                <div className="welcome-icon">

                  ⚡

                </div>

                <h1>

                  Welcome to Zentra AI

                </h1>

                <p>

                  Your all-in-one AI assistant for chatting,
                  coding, writing, learning and productivity.

                </p>

                <div className="suggestions">

                  {

                    suggestions.map((item, index) => (

                      <button

                        key={index}

                        className="suggestion-card"

                        onClick={() =>
                          useSuggestion(item)
                        }

                      >

                        {item}

                      </button>

                    ))

                  }

                </div>

              </div>

            )

            :

            (

              <div className="messages">

                {

                  chat.map((item) => (

                    <div

                      key={item.id}

                      className={`message-row ${item.type}`}

                    >

                      <div className="message-avatar">

                        {

                          item.type === "ai"

                          ?

                          "🤖"

                          :

                          "👤"

                        }

                      </div>

                      <div className="message-content">
<div className="message-bubble">

                          <p>

                            {item.text}

                          </p>

                          <span className="message-time">

                            {item.time}

                          </span>

                        </div>

                    </div>
                 
                  </div>

                  ))

                }

                {

                  loading && (

                    <div className="message-row ai">

                      <div className="message-avatar">

                        🤖

                      </div>
                      <div className="message-content">
                      <div className="message-bubble typing">

                        <span></span>

                        <span></span>

                        <span></span>

                      </div>

                    </div>
       
                  </div>

                  )

                }

                <div ref={messagesEndRef}></div>

              </div>

            )

          }

        </div>

<div className="input-wrapper">

          <button className="icon-btn">

            📎

          </button>

          <input

            ref={inputRef}

            type="text"

            value={message}

            placeholder="Message Zentra AI..."

            onChange={(e) =>
              setMessage(e.target.value)
            }

            onKeyDown={(e) => {

              if (e.key === "Enter") {

                sendMessage();

              }

            }}

          />

          <button className="icon-btn">

            🎤

          </button>

          <button

            className="send-btn"

            onClick={sendMessage}

          >

            ➤

          </button>

        </div>

      </main>

    </div>

  );

}

export default Chat;
