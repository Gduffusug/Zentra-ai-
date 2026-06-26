import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Pricing from "./components/Pricing";


function App(){

  return (

    <div>

      <Navbar />

      <Hero />

      <Tools />

      <Pricing />

    </div>

  )

}


createRoot(
  document.getElementById("root")
).render(
  <App />
);
