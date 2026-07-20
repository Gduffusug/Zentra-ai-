import { useEffect, useState } from "react";
import { replaceTemplate } from "./templateEngine";

export default function ResumePreview({
  template,
  resume,
}) {

  const [html, setHtml] = useState("");

  useEffect(() => {
const response = await fetch(`/resume/templates/${template.id}.html`);
const templateHTML = await response.text();

const finalHTML = replaceTemplate(templateHTML, resume);

setHtml(finalHTML);
    async function generateResume() {

      const templateHTML = await loadTemplate(template.id);

      const finalHTML = replaceTemplate(
        templateHTML,
        resume
      );

      setHtml(finalHTML);

    }

    generateResume();

  }, [template, resume]);

  return (
    <div className="resume-preview">

      <iframe
        title="Resume Preview"
        srcDoc={html}
        style={{
          width: "100%",
          height: "100vh",
          border: "none",
          background: "#fff"
        }}
      />

    </div>
  );

}
