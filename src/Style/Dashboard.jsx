import "./Dashboard.css";

function Dashboard() {

  const user = localStorage.getItem("user") || "User";

  return (
    <div className="dashboard">

      <div className="hero">

        <h1>
          Welcome back, {user} 👋
        </h1>

        <p>
          Create, analyze and build with advanced AI.
        </p>


        <div className="cards">

          <div className="card">
            <h2>🤖 AI Chat</h2>
            <p>
              Talk with your personal AI assistant.
            </p>

            <button>
              Start Chat →
            </button>
          </div>


          <div className="card">
            <h2>🎨 Image AI</h2>
            <p>
              Generate creative AI images.
            </p>

            <button>
              Create →
            </button>
          </div>


          <div className="card">
            <h2>📁 Projects</h2>
            <p>
              Manage your AI projects.
            </p>

            <button>
              Open →
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}


export default Dashboard;
