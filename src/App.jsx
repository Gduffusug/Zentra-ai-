import React from "react";
import {useNavigate} from "react-router-dom";
import "./style.css";


function App(){

const navigate = useNavigate();


return(

<div className="dashboard">


<aside className="sidebar">

<h1 className="logo">⚡ Zentra AI</h1>


<div className="menu">

<p>🏠 Dashboard</p>

<p onClick={()=>navigate("/chat")}>
🤖 AI Chat
</p>

<p>🎨 Image AI</p>

<p>📁 Projects</p>

<p>⚙ Settings</p>

</div>


<div className="upgrade">

<h3>Upgrade Pro</h3>

<p>
Unlock premium AI tools
</p>

<button>
Upgrade
</button>

</div>


</aside>



<main className="main">


<header className="topbar">

<input placeholder="Search anything..." />

<button className="pro">
Upgrade
</button>


<span>
👤 Jeet
</span>


</header>




<section className="hero-dashboard">


<div>

<h1>
Welcome back,
<span>
 Jeet 👋
</span>
</h1>


<p>
Create, analyze and build with advanced AI.
</p>


<button className="start"
onClick={()=>navigate("/chat")}
>
Start AI Chat →
</button>


</div>


<div className="robot">
🤖
</div>


</section>




<h2>
AI Tools
</h2>



<div className="cards">



<div className="card"
onClick={()=>navigate("/chat")}
>

<h2>
🤖
</h2>

<h3>
AI Chat
</h3>

<p>
Chat with powerful AI
</p>

</div>




<div className="card">

<h2>
🎨
</h2>

<h3>
Image Generator
</h3>

<p>
Create AI images
</p>

</div>




<div className="card">

<h2>
💻
</h2>

<h3>
Code AI
</h3>

<p>
Generate code faster
</p>

</div>




<div className="card">

<h2>
🎙
</h2>

<h3>
Voice AI
</h3>

<p>
Convert speech
</p>

</div>



</div>


</main>


</div>


)

}


export default App;
