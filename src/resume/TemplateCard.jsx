import "./TemplateCard.css";

export default function TemplateCard({
  template,
  selected,
  onSelect,
}) {
  return (
    <div
      className={`template-card ${selected ? "selected" : ""}`}
      onClick={() => onSelect(template.id)}
    >
      <div className="template-preview">
        <img
          src={template.preview}
          alt={template.name}
          className="template-image"
        />

        {template.type === "Premium" && (
          <div className="premium-badge">
            🔒 Premium
          </div>
        )}
      </div>

      <div className="template-info">
        <h3>{template.name}</h3>

        <p className="template-profession">
          {template.profession}
        </p>

        <span
          className={`template-type ${
            template.type === "Premium"
              ? "premium"
              : "free"
          }`}
        >
          {template.type}
        </span>
      </div>
    </div>
  );
}
