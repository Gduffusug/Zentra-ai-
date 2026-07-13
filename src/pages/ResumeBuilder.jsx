import React from "react";
import "./ResumeBuilder.css";
import { useState } from "react";

export default function ResumeBuilder() {
  return (
    const [resume, setResume] = useState({

  fullName:"",
  jobTitle:"",
  email:"",
  phone:"",
  address:"",
  linkedin:"",
  github:"",
  portfolio:"",
  education:"",
  skills:"",
  experience:"",
  projects:"",
  certificates:"",
  languages:"",
  achievements:""

});
    <div className="resume-page">

      <div className="resume-header">
        <h1>📄 AI Resume Builder</h1>
        <p>Create a professional ATS-friendly resume in minutes.</p>
      </div>

      <div className="resume-container">

        const handleChange = (e)=>{

setResume({

...resume,

[e.target.name]:e.target.value

});

};
<div className="resume-form">

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email Address" />

        <input type="text" placeholder="Phone Number" />

        <input type="text" placeholder="Address" />
        <input
  type="text"
  placeholder="Job Title"
/>

<input
  type="text"
  placeholder="LinkedIn URL"
/>

<input
  type="text"
  placeholder="GitHub URL"
/>

<input
  type="text"
  placeholder="Portfolio Website"
/>

        <textarea
          placeholder="Education"
          rows="3"
        />

        <textarea
          placeholder="Skills"
          rows="3"
        />

        <textarea
          placeholder="Experience"
          rows="4"
        />

        <textarea
          placeholder="Projects"
          rows="4"
        />
        <textarea
  placeholder="Certificates"
  rows="3"
/>

<textarea
  placeholder="Languages"
  rows="2"
/>

<textarea
  placeholder="Achievements"
  rows="3"
/>

        <button className="generate-btn">
          ✨ Generate Resume
        </button>

      </div>
        
      </div>
      
    </div>
  );
}
