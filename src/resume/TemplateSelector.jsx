import { useState } from "react";
import "./TemplateSelector.css";
import TemplateCard from "./TemplateCard";
import { templates } from "./templateRegistry";

function TemplateSelector({ onContinue }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  return (
    <div className="template-selector">

      <div className="template-header">

        <h1>Choose Your Resume Template</h1>

        <p>
          Select a professional template that matches your career.
        </p>

      </div>

      {/* FREE */}

      <div className="template-section">

        <h2>🟢 Free Templates</h2>

        <div className="template-grid">

          {templates
            .filter((t) => t.type === "Free")
            .map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                selected={selectedTemplate?.id === template.id}
                onSelect={setSelectedTemplate}
              />
            ))}

        </div>

      </div>

      {/* PREMIUM */}

      <div className="template-section">

        <h2>👑 Premium Templates</h2>

        <div className="template-grid">

          {templates
            .filter((t) => t.type === "Premium")
            .map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                selected={selectedTemplate?.id === template.id}
                onSelect={setSelectedTemplate}
              />
            ))}

        </div>

      </div>

      <div className="template-footer">

        <button
          className="continue-btn"
          disabled={!selectedTemplate}
          onClick={() => onContinue(selectedTemplate)}
        >
          Continue →
        </button>

      </div>

    </div>
  );
}

export default TemplateSelector;
