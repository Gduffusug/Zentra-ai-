import "./styles/Dashboard.css";
import "./Styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="hero">
        <div>
          <h1>
            Welcome back,👋
          </h1>

          <p>
            Create, analyze and build with advanced AI.
          </p>

          <button>
            Start AI Chat →
          </button>
        </div>

        <div className="robot">
          🤖
        </div>

      </div>


      <h2>AI Tools</h2>

      <div className="tools">

        <div className="card">
          🤖
          <h3>AI Chat</h3>
          <p>Chat with powerful AI</p>
        </div>


        <div className="card">
          🎨
          <h3>Image AI</h3>
          <p>Create AI images</p>
        </div>


        <div className="card">
          💻
          <h3>Code AI</h3>
          <p>Generate code faster</p>
        </div>


        <div className="card">
          🎙️
          <h3>Voice AI</h3>
          <p>Convert speech</p>
        </div>


      </div>

    </div>
  );
}

export default Dashboard;
