
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
export default function Login(){
const navigate = useNavigate();

const [loading, setLoading] = useState(false);

const [error, setError] = useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const signup = async () => {
  setLoading(true);
  setError("");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (e) {
    setError(e.message);
  }

  setLoading(false);
};

  const login = async () => {
  setLoading(true);
  setError("");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (e) {
    setError(e.message);
  }

  setLoading(false);
};


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
