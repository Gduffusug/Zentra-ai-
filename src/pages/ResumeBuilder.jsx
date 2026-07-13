import { useState } from "react";
import "./ResumeBuilder.css";

export default function ResumeBuilder() {

  const [resume, setResume] = useState({

    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    github: "",
    portfolio: "",

    summary: "",

    education: "",
    skills: "",
    experience: "",
    projects: "",
    certificates: "",
    languages: "",
    achievements: ""

  });

  const handleChange = (e) => {

    setResume({

      ...resume,

      [e.target.name]: e.target.value

    });

  };

  return (

    <div className="resume-page">

      <div className="resume-header">

        <h1>📄 AI Resume Builder</h1>

        <p>
          Create a professional ATS-friendly resume in minutes.
        </p>

      </div>

      <div className="resume-container">

        <div className="resume-form">

          <h2>Personal Information</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={resume.fullName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={resume.jobTitle}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={resume.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={resume.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={resume.address}
            onChange={handleChange}
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={resume.linkedin}
            onChange={handleChange}
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={resume.github}
            onChange={handleChange}
          />

          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio Website"
            value={resume.portfolio}
            onChange={handleChange}
          />
          <h2>Professional Summary</h2>

          <textarea
            name="summary"
            placeholder="Write a short professional summary..."
            rows="5"
            value={resume.summary}
            onChange={handleChange}
          />

          <h2>Education</h2>

          <textarea
            name="education"
            placeholder="Education"
            rows="5"
            value={resume.education}
            onChange={handleChange}
          />

          <h2>Skills</h2>

          <textarea
            name="skills"
            placeholder="Skills"
            rows="5"
            value={resume.skills}
            onChange={handleChange}
          />

          <h2>Work Experience</h2>

          <textarea
            name="experience"
            placeholder="Work Experience"
            rows="6"
            value={resume.experience}
            onChange={handleChange}
          />

          <h2>Projects</h2>

          <textarea
            name="projects"
            placeholder="Projects"
            rows="5"
            value={resume.projects}
            onChange={handleChange}
          />

          <h2>Certificates</h2>

          <textarea
            name="certificates"
            placeholder="Certificates"
            rows="4"
            value={resume.certificates}
            onChange={handleChange}
          />

          <h2>Languages</h2>

          <textarea
            name="languages"
            placeholder="Languages"
            rows="3"
            value={resume.languages}
            onChange={handleChange}
          />

          <h2>Achievements</h2>

          <textarea
            name="achievements"
            placeholder="Achievements"
            rows="4"
            value={resume.achievements}
            onChange={handleChange}
          />

          <button className="generate-btn">

            ✨ Generate AI Resume

          </button>
          </div>

        <div className="resume-preview">

          <div className="preview-paper">

            <h1>
              {resume.fullName || "Your Name"}
            </h1>

            <h3>
              {resume.jobTitle || "Job Title"}
            </h3>

            <p>
              📧 {resume.email || "Email"}
            </p>

            <p>
              📱 {resume.phone || "Phone Number"}
            </p>

            <p>
              📍 {resume.address || "Address"}
            </p>

            <hr />

            <h2>Professional Summary</h2>

            <p>
              {resume.summary || "Professional Summary"}
            </p>

            <h2>Education</h2>

            <p>
              {resume.education || "Education"}
            </p>

            <h2>Skills</h2>

            <p>
              {resume.skills || "Skills"}
            </p>

            <h2>Experience</h2>

            <p>
              {resume.experience || "Experience"}
            </p>

            <h2>Projects</h2>

            <p>
              {resume.projects || "Projects"}
            </p>

            <h2>Certificates</h2>

            <p>
              {resume.certificates || "Certificates"}
            </p>

            <h2>Languages</h2>

            <p>
              {resume.languages || "Languages"}
            </p>

            <h2>Achievements</h2>

            <p>
              {resume.achievements || "Achievements"}
            </p>

          </div>

        </div>

      </div>
      
      </div>

  );

}
