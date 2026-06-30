import React from "react";
import "./style.css";

function App() {

  return (
    <div className="dashboard">

      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">⚡ Zentra AI</h1>

        <div className="menu">
          <p>🏠 Dashboard</p>
          <p>🤖 AI Chat</p>
          <p>🎨 Image AI</p>
          <p>📁 Projects</p>
          <p>⚙ Settings</p>
        </div>

        <div className="upgrade">
          <h3>Upgrade Pro</h3>
          <p>Unlock premium AI tools</p>
          <button>Upgrade</button>
        </div>

      </aside>


      {/* Main */}
      <main className="main">

        <header className="topbar">
          <input placeholder="Search anything..." />

          <button className="pro">
            Upgrade
          </button>

          <span>👤 Jeet</span>
        </header>


        <section className="hero-dashboard">

          <div>
            <h1>
              Welcome back,
              <span> Jeet 👋</span>
            </h1>

            <p>
              Create, analyze and build with advanced AI.
            </p>

            <button className="start">
              Start AI Chat →
            </button>

          </div>


          <div className="robot">
            🤖
          </div>

        </section>



        <h2>AI Tools</h2>


        <div className="cards">


          <div className="card">
            <h2>🤖</h2>
            <h3>AI Chat</h3>
            <p>Chat with powerful AI</p>
          </div>


          <div className="card">
            <h2>🎨</h2>
            <h3>Image Generator</h3>
            <p>Create AI images</p>
          </div>


          <div className="card">
            <h2>💻</h2>
            <h3>Code AI</h3>
            <p>Generate code faster</p>
          </div>


          <div className="card">
            <h2>🎙</h2>
            <h3>Voice AI</h3>
            <p>Convert speech</p>
          </div>


        </div>


      </main>


    </div>
  )
}


export default App;
