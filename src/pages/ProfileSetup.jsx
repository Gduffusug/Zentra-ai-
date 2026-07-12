import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ProfileSetup.css";

import { auth, db } from "../firebase";

import { doc, setDoc } from "firebase/firestore";

export default function ProfileSetup() {

  const [name, setName] = useState("");

  const navigate = useNavigate();

  const saveProfile = async () => {

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    await setDoc(
      doc(db, "users", auth.currentUser.uid),
      {
        uid: auth.currentUser.uid,
        name: name,
        email: auth.currentUser.email,
        premium: false,
        createdAt: new Date().toISOString()
      }
    );

    navigate("/");

  };

  return (

    <div className="profile-page">

      <div className="profile-box">

        <h1>👋 Welcome to Zentra AI</h1>

        <p>
          What should we call you?
        </p>

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={saveProfile}>
          Continue
        </button>

      </div>

    </div>

  );

}
