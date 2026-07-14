import "./styles/ResumeTemplateSelector.css";

const freeTemplates = [
  {
    id: 1,
    name: "Modern Blue",
    color: "#2563eb",
  },
  {
    id: 2,
    name: "Minimal White",
    color: "#ffffff",
  },
  {
    id: 3,
    name: "Professional Gray",
    color: "#64748b",
  },
  {
    id: 4,
    name: "Creative Green",
    color: "#10b981",
  },
  {
    id: 5,
    name: "Elegant Black",
    color: "#111827",
  },
];

const premiumTemplates = [
  "Harvard ATS",
  "Google Resume",
  "Microsoft Resume",
  "Executive Gold",
  "Luxury Black",
  "Corporate Elite",
];

export default function ResumeTemplateSelector() {
  return (
    <div className="resume-template-page">

      <div className="resume-template-header">
        <h1>Choose Your Resume Template</h1>

        <p>
          Select a template before generating your AI Resume.
        </p>
      </div>

      <h2 className="section-title">
        Free Templates
      </h2>

      <div className="template-grid">

        {freeTemplates.map((template) => (

          <div
            key={template.id}
            className="template-card"
          >

            <div
              className="template-preview"
              style={{
                background: template.color,
              }}
            />

            <h3>{template.name}</h3>

            <button className="use-template-btn">
              Use Template
            </button>

          </div>

        ))}

      </div>

      <h2 className="section-title premium-title">
        Premium Templates 👑
      </h2>

      <div className="template-grid">

        {premiumTemplates.map((template) => (

          <div
            key={template}
            className="template-card premium-card"
          >

            <div className="template-preview premium-preview" />

            <h3>{template}</h3>

            <button className="premium-btn">
              🔒 Premium
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}
