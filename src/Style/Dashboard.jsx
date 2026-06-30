import "./Dashboard.css";

function Dashboard() {

  const username = localStorage.getItem("username") || "User";

  return (
    <div className="dashboard">

      <h1>
        Welcome back, {username} 👋
      </h1>

      <p className="subtitle">
        Create, analyze and build with advanced AI.
      </p>


      <div className="cards">

        <div className="card">
          <h2>🤖 AI Chat</h2>
          <p>Chat with Zentra AI assistant.</p>
          <button>Start Chat →</button>
        </div>


        <div className="card">
          <h2>🎨 Image AI</h2>
          <p>Create amazing AI images.</p>
          <button>Create →</button>
        </div>


        <div className="card">
          <h2>📁 Projects</h2>
          <p>Manage your AI projects.</p>
          <button>Open →</button>
        </div>


      </div>


      <div className="pro-box">

        <h2>⚡ Upgrade Pro</h2>

        <p>
          Unlock premium AI tools
        </p>

        <button>
          Upgrade
        </button>

      </div>


    </div>
  );
}


export default Dashboard;
