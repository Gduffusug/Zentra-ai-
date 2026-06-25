import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";


function App(){

  return (

    <div>

      <Navbar />

      <Hero />

    </div>

  )

}


createRoot(
  document.getElementById("root")
).render(
  <App />
);
