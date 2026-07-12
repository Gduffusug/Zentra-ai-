import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "./firebase";

import {
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import "./style.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="app">

      {/* Sidebar */}
      <aside className="sidebar">

        <div className="logo">
          ⚡ Zentra AI
        </div>

        <div className="menu">

          <div className="menu-item active">
            🏠 Dashboard
          </div>

          <div
            className="menu-item"
            onClick={() => navigate("/chat")}
          >
            🤖 AI Chat
          </div>

          <div className="menu-item">
            🎨 Image AI
          </div>

          <div className="menu-item">
            💻 Code AI
          </div>

          <div className="menu-item">
            📁 Projects
          </div>

          <div className="menu-item">
            ⚙ Settings
          </div>

        </div>

        <div className="upgrade-card">

          <h3>Upgrade Pro</h3>

          <p>
            Unlock all premium AI tools.
          </p>

          <button className="upgrade-btn">
            Upgrade
          </button>

        </div>

      </aside>

      {/* Main */}
      <main className="main">

        {/* Topbar */}

        <header className="topbar">

          <input
            className="search"
            placeholder="Search..."
          />

          <div className="top-actions">

            <button className="pro-btn">
              PRO
            </button>

        <div
  className="user"
  onClick={() => navigate("/login")}
  style={{ cursor: "pointer" }}
>
  👤 Login
</div>

          </div>

        </header>

        {/* Hero */}

        <section className="hero">

          <div>

            <h1>
              Welcome back,
              <br />
              <span>user 👋</span>
            </h1>

            <p>
              Build faster with Zentra AI.
              Chat, generate images and code
              in one workspace.
            </p>

            <button
              className="start-btn"
              onClick={() => navigate("/chat")}
            >
              Start AI Chat →
            </button>

          </div>

          <div className="hero-icon">

            🤖

          </div>

        </section>

        {/* AI Tools */}

        <h2 className="section-title">
          AI Tools
        </h2>

        <div className="cards">

  <div className="card" onClick={() => navigate("/chat")}>
    <div className="emoji">🤖</div>
    <h3>AI Chat</h3>
    <p>Chat with powerful AI assistant.</p>
  </div>

  <div
  className="card"
  onClick={() => navigate("/resume-builder")}
>
  <div className="emoji">📝</div>
  <h3>Resume Builder</h3>
  <p>Create professional resumes with AI.</p>
</div>

  <div
  className="card"
  onClick={() => navigate("/merge-pdf")}
>
  <div className="emoji">📄</div>
  <h3>PDF Tools</h3>
  <p>Merge, split and convert PDF files.</p>
</div>

  <div className="card">
    <div className="emoji">🔳</div>
    <h3>QR Generator</h3>
    <p>Create QR codes instantly.</p>
  </div>

  <div className="card">
    <div className="emoji">🔑</div>
    <h3>Password Generator</h3>
    <p>Generate strong secure passwords.</p>
  </div>

  <div className="card">
    <div className="emoji">📝</div>
    <h3>Text Tools</h3>
    <p>Useful writing and editing tools.</p>
  </div>

  <div className="card">
    <div className="emoji">🖼️</div>
    <h3>Image Converter</h3>
    <p>Convert images into multiple formats.</p>
  </div>

  <div className="card">
    <div className="emoji">🗜️</div>
    <h3>Image Compressor</h3>
    <p>Compress images without losing quality.</p>
  </div>

  <div
  className="card"
  onClick={() => navigate("/age-calculator")}
>
  <div className="emoji">🎂</div>
  <h3>Age Calculator</h3>
  <p>Calculate your exact age instantly.</p>
</div>

  <div className="card">
    <div className="emoji">💰</div>
    <h3>EMI Calculator</h3>
    <p>Calculate monthly loan EMI easily.</p>
  </div>

  <div className="card">
    <div className="emoji">🧾</div>
    <h3>GST Calculator</h3>
    <p>Fast and accurate GST calculations.</p>
  </div>

  <div className="card">
    <div className="emoji">📊</div>
    <h3>Word Counter</h3>
    <p>Count words and characters instantly.</p>
  </div>

  <div className="card">
    <div className="emoji">📧</div>
    <h3>AI Email Writer</h3>
    <p>Write professional emails with AI.</p>
  </div>

  <div className="card">
    <div className="emoji">📄</div>
    <h3>AI Summarizer</h3>
    <p>Summarize long articles in seconds.</p>
  </div>

  <div className="card">
    <div className="emoji">🌍</div>
    <h3>AI Translator</h3>
    <p>Translate text into multiple languages.</p>
  </div>

</div>

</main>

</div>

);
}

export default App;
