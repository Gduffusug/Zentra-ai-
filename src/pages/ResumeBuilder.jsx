import { useState } from "react";
import "./ResumeBuilder.css";

export default function ResumeBuilder() {
  const [step, setStep] = useState(1);

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
    achievements: "",
  });

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="resume-page">

  <div className="resume-header">
    <h1>🚀 AI Resume Builder</h1>
    <p>Create a premium ATS-friendly resume.</p>
  </div>

  <div className="resume-container">

    <div className="resume-form">

      {step === 1 && (
        <>
          <h2>Personal Information</h2>
          <div className="input-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={resume.fullName}
            onChange={handleChange}
          />
          </div>

          <div className="input-group">
          <input
            type="text"
            name="jobTitle"
            placeholder="Target Job Title"
            value={resume.jobTitle}
            onChange={handleChange}
          />
          </div>
          
          <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={resume.email}
            onChange={handleChange}
          />
          </div>
          
       <div className="input-group">
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={resume.phone}
            onChange={handleChange}
          />
       </div>
          
        <div className="input-group">
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={resume.address}
            onChange={handleChange}
          />
        </div>
          
       <div className="input-group">
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn URL"
            value={resume.linkedin}
            onChange={handleChange}
          />
       </div>
          
         <div className="input-group">
          <input
            type="text"
            name="github"
            placeholder="GitHub URL"
            value={resume.github}
            onChange={handleChange}
          />
         </div>

          <div className="input-group">
          <input
            type="text"
            name="portfolio"
            placeholder="Portfolio URL"
            value={resume.portfolio}
            onChange={handleChange}
          />
          </div>

          <div className="resume-actions">
            <button
              className="next-button"
              onClick={nextStep}
            >
              Next →
            </button>
          </div>
        </>
      )}
      {step === 2 && (
        <>
          <h2>Professional Details</h2>

          <textarea
            name="summary"
            placeholder="Professional Summary"
            rows="5"
            value={resume.summary}
            onChange={handleChange}
          />

          <textarea
            name="education"
            placeholder="Education"
            rows="4"
            value={resume.education}
            onChange={handleChange}
          />

          <textarea
            name="skills"
            placeholder="Skills"
            rows="4"
            value={resume.skills}
            onChange={handleChange}
          />

          <textarea
            name="experience"
            placeholder="Experience"
            rows="6"
            value={resume.experience}
            onChange={handleChange}
          />

          <textarea
            name="projects"
            placeholder="Projects"
            rows="5"
            value={resume.projects}
            onChange={handleChange}
          />

          <textarea
            name="certificates"
            placeholder="Certificates"
            rows="4"
            value={resume.certificates}
            onChange={handleChange}
          />

          <textarea
            name="languages"
            placeholder="Languages"
            rows="3"
            value={resume.languages}
            onChange={handleChange}
          />

          <textarea
            name="achievements"
            placeholder="Achievements"
            rows="4"
            value={resume.achievements}
            onChange={handleChange}
          />

          <div className="resume-actions">
            <button className="back-button" onClick={prevStep}>
              ← Back
            </button>

            <button className="next-button" onClick={nextStep}>
              Preview →
            </button>
          </div>
        </>
      )}
      {step === 3 && (
        <>

          <div className="template-selection-page">

            <h2>
              🎨 Choose Your Resume Template
            </h2>

            <p>
              In the next step you will select a professional resume template.
            </p>

            <div className="template-placeholder">

              <h3>
                Resume Template Selector
              </h3>

              <p>
                Free Templates • Premium Templates • Live Preview
              </p>

            </div>

            <div className="resume-actions">

              <button
                className="back-button"
                onClick={prevStep}
              >
                ← Back
              </button>

              <button
                className="next-button"
              >
                Continue →
              </button>

            </div>

          </div>

        </>
      )}

    </div>

  </div>

</div>

  );

}

      
      
