import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Chat from "./pages/Chat";


function App(){

const path = window.location.pathname;


if(path === "/chat"){

return <Chat />;

}


return(

<div>

<Navbar />

<Hero />

<Tools />

</div>

)

}


createRoot(
document.getElementById("root")
).render(
<App />
);
