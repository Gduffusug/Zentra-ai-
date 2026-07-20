import { useEffect, useState } from "react";
import { replaceTemplate } from "./templateEngine";

export default function ResumePreview({
  template,
  resume,
}) {

  const [html, setHtml] = useState("");

  useEffect(() => {
    async function generateResume() {

  const response = await fetch(
    `/resume/templates/${template.id}.html`
  );

  const templateHTML = await response.text();

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
