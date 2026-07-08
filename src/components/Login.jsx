
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
export default function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const signup=()=>{
 createUserWithEmailAndPassword(auth,email,password)
 .then(()=>alert("Account created"))
 .catch(e=>alert(e.message));
}

const login=()=>{
 signInWithEmailAndPassword(auth,email,password)
 .then(()=>alert("Login successful"))
 .catch(e=>alert(e.message));
}


return(
<div>
<h2>Zentra AI Login</h2>

<input 
placeholder="Email"
onChange={e=>setEmail(e.target.value)}
/>

<input 
placeholder="Password"
type="password"
onChange={e=>setPassword(e.target.value)}
/>

<button onClick={signup}>Create Account</button>

<button onClick={login}>Login</button>

</div>
)

}
