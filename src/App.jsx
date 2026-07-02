import React from "react";
import { useNavigate } from "react-router-dom";
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

            <div className="user">

              👤 Jeet

            </div>

          </div>

        </header>

        {/* Hero */}

        <section className="hero">

          <div>

            <h1>
              Welcome back,
              <br />
              <span>Jeet 👋</span>
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

          <div
            className="card"
            onClick={() => navigate("/chat")}
          >

            <div className="emoji">
              🤖
            </div>

            <h3>AI Chat</h3>

            <p>
              Ask anything instantly.
            </p>

          </div>

          <div className="card">

            <div className="emoji">
              🎨
            </div>

            <h3>Image AI</h3>

            <p>
              Generate amazing images.
            </p>

          </div>

          <div className="card">

            <div className="emoji">
              💻
            </div>

            <h3>Code AI</h3>

            <p>
              Generate clean code.
            </p>

          </div>

          <div className="card">

            <div className="emoji">
              🎙
            </div>

            <h3>Voice AI</h3>

            <p>
              Voice assistant coming soon.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
}

export default App;
