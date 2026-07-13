import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import "./Login.css";

import { auth, googleProvider } from "../firebase";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";

import { FcGoogle } from "react-icons/fc";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
const signup = async () => {

  setLoading(true);
  setError("");

  try {

    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    navigate("/profile-setup");

  } catch (err) {

    setError(err.message);

  }

  setLoading(false);

};

const login = async () => {
  setLoading(true);
  setError("");

  try {

    const userCredential =
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

    const user = userCredential.user;

    const profile = await getDoc(
      doc(db, "users", user.uid)
    );

    if (profile.exists()) {
      navigate("/");
    } else {
      navigate("/profile-setup");
    }

  } catch (err) {
    setError(err.message);
  }

  setLoading(false);
};

const googleLogin = async () => {
  setLoading(true);
  setError("");

  try {

    const userCredential =
      await signInWithPopup(
        auth,
        googleProvider
      );

    const user = userCredential.user;

    const profile = await getDoc(
      doc(db, "users", user.uid)
    );

    if (profile.exists()) {
      navigate("/");
    } else {
      navigate("/profile-setup");
    }

  } catch (err) {
    setError(err.message);
  }

  setLoading(false);
};
return (
  <div className="login-page">

    <div className="login-box">

      <h1 className="login-title">
        Zentra AI
      </h1>

      <p className="login-subtitle">
        Welcome Back 👋
      </p>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <input
        className="login-input"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        className="login-input"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button
        className="login-btn"
        onClick={login}
        disabled={loading}
      >
        {loading ? "Please Wait..." : "Login"}
      </button>

      <button
        className="login-btn"
        onClick={signup}
        disabled={loading}
      >
        Create Account
      </button>

      <button
        className="login-btn google-btn"
        onClick={googleLogin}
        disabled={loading}
      >
        <FcGoogle />
        Continue with Google
      </button>
</div>

  </div>
);

}


