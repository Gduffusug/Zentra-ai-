
import { useState } from "react"; 
import "./MergePdf.css"

function MergePdf() {
  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
  };

  return (
    <div className="merge-page">

      <h1>📄 Merge PDF</h1>

      <p>Combine multiple PDF files into one.</p>

      <label className="upload-box">
        <input
          type="file"
          multiple
          accept=".pdf"
          onChange={handleFiles}
          hidden
        />

        <h2>⬆ Upload PDFs</h2>

        <span>Select multiple PDF files</span>

      </label>

      <div className="file-list">

        {files.map((file, index) => (

          <div className="file-card" key={index}>

            📄 {file.name}

          </div>

        ))}

      </div>

      <button className="merge-btn">

        Merge PDFs

      </button>

    </div>
  );
}

export default MergePdf;
