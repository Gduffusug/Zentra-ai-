import { useState } from "react";
import "./ResumeBuilder.css";
import TemplateSelector from "../resume/TemplateSelector";

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
    photo: "",

    summary: "",
    education: "",
    skills: "",
    experience: "",
    projects: "",
    certificates: "",
    languages: "",
    achievements: "",
  });
  const [selectedTemplate, setSelectedTemplate] = useState(null);
const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value,
    });
  };

  const isStepValid = () => {
  switch (step) {

    case 1:
      return (
        resume.photo &&
        resume.fullName.trim() !== "" &&
        resume.jobTitle.trim() !== "" &&
        resume.email.trim() !== "" &&
        resume.phone.trim() !== ""
      );

    case 2:
      return (
        resume.summary.trim() !== "" &&
        resume.education.trim() !== "" &&
        resume.skills.trim() !== "" &&
        resume.experience.trim() !== ""
      );

    case 3:
      return true;

    default:
      return false;
  }
};
  const nextStep = () => {
  if (!isStepValid()) return;

  if (step < 3) {
    setStep(step + 1);
  }
};

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };
  const handlePhotoUpload = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {
    setResume((prev) => ({
      ...prev,
      photo: reader.result,
    }));
  };

  reader.readAsDataURL(file);

};
if (showPreview) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Resume Preview</h1>

      <h2>{selectedTemplate?.name}</h2>

      <p>🎉 Template Selected Successfully</p>
    </div>
  );
}
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
          <div className="photo-upload-section">

  <label className="photo-upload-box">

    {resume.photo ? (

      <img
        src={resume.photo}
        alt="Resume"
        className="uploaded-photo"
      />

    ) : (

      <div className="upload-placeholder">

        <div className="upload-icon">📷</div>

        <h4>Upload Profile Photo</h4>

        <p>PNG • JPG • JPEG</p>

      </div>

    )}

    <input
      type="file"
      accept="image/*"
      hidden
      onChange={handlePhotoUpload}
    />

  </label>

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
          
        <div className="input-group">
          <textarea
            name="summary"
            placeholder="Professional Summary"
            rows="5"
            value={resume.summary}
            onChange={handleChange}
          />
        </div>
          
           <div className="input-group">
          <textarea
            name="education"
            placeholder="Education"
            rows="4"
            value={resume.education}
            onChange={handleChange}
          />
           </div>

          <div className="input-group">
          <textarea
            name="skills"
            placeholder="Skills"
            rows="4"
            value={resume.skills}
            onChange={handleChange}
          />
          </div>
          

          <div className="input-group">
          <textarea
            name="experience"
            placeholder="Experience"
            rows="6"
            value={resume.experience}
            onChange={handleChange}
          />
          </div>

          <div className="input-group">
          <textarea
            name="projects"
            placeholder="Projects"
            rows="5"
            value={resume.projects}
            onChange={handleChange}
          />
          </div>

          <div className="input-group">
          <textarea
            name="certificates"
            placeholder="Certificates"
            rows="4"
            value={resume.certificates}
            onChange={handleChange}
          />
          </div>
          

          <div className="input-group">
          <textarea
            name="languages"
            placeholder="Languages"
            rows="3"
            value={resume.languages}
            onChange={handleChange}
          />
          </div>

          <div className="input-group">
          <textarea
            name="achievements"
            placeholder="Achievements"
            rows="4"
            value={resume.achievements}
            onChange={handleChange}
          />
          </div>

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

            <TemplateSelector
  onContinue={(template) => {
    setSelectedTemplate(template);
    setShowPreview(true);
  }}
/>
            <div className="resume-actions">

              <button
                className="back-button"
                onClick={prevStep}
              >
                ← Back
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

      
      
