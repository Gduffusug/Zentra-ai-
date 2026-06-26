import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";

function App(){

return(
<>
<Navbar />
<Hero />
<Tools />
</>
)

}

createRoot(document.getElementById("root")).render(<App />);
