import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Chat from "./pages/Chat";
import Login from "./components/Login";


function App(){

const path = window.location.pathname;


if(path === "/chat"){
  return <Chat />;
  }


  return(
    <div>

        <Login />

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
                        );import React from "react";
import { createRoot } from "react-dom/client";

import "./style.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tools from "./components/Tools";
import Chat from "./pages/Chat";
import Login from "./components/Login";


function App(){

const path = window.location.pathname;


if(path === "/chat"){
  return <Chat />;
}


return(
  <div>

    <Login />

    <Navbar />

    <Hero />

    <Tools />

  </div>
)

}


createRoot(
 document.getElementById("ro
