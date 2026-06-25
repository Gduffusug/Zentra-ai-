import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="page">
      <h1>Zentra AI</h1>
      <p>Your premium AI tools platform</p>

      <div className="cards">
        <div className="card">
          <h2>AI Chat</h2>
          <p>Ask anything with AI</p>
        </div>

        <div className="card">
          <h2>AI Writer</h2>
          <p>Create content faster</p>
        </div>

        <div className="card">
          <h2>AI Summary</h2>
          <p>Summarize text instantly</p>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <App />
);
