import React, { useRef, useState } from "react";
import "./MergePdf.css";

function MergePdf() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const fileInputRef = useRef(null);

  // Select Files
  const handleFiles = (selectedFiles) => {
    const newFiles = Array.from(selectedFiles);

    const filtered = newFiles.filter((file) => {
      return (
        file.type === "application/pdf" ||
        file.type === "image/png" ||
        file.type === "image/jpeg" ||
        file.type === "image/webp"
      );
    });

    setFiles((prev) => [...prev, ...filtered]);
  };

  const handleInputChange = (e) => {
    handleFiles(e.target.files);
  };

  // Drag Events
  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    if (e.dataTransfer.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const totalSize = files.reduce(
    (total, file) => total + file.size,
    0
  );

  return (
    <div className="merge-page">

      {/* Animated Background */}
      <div className="bg bg1"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>

      <div className="merge-container">

        <h1>📄 PDF Studio</h1>

        <p>
          Merge PDFs or convert images into one PDF.
        </p>

        {/* Upload Area */}

        <div
          className={`upload-box ${
            dragActive ? "active" : ""
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >

          <div className="upload-icon">
            📂
          </div>

          <h2>Drag & Drop Files</h2>

          <p>
            PDF, PNG, JPG, JPEG, WEBP
          </p>

          <button
            className="browse-btn"
            onClick={() =>
              fileInputRef.current.click()
            }
          >
            Browse Files
          </button>

          <input
            ref={fileInputRef}
            type="file"
            hidden
            multiple
            accept=".pdf,.png,.jpg,.jpeg,.webp"
            onChange={handleInputChange}
          />

        </div>

        {/* Stats */}

        {files.length > 0 && (
          <div className="stats">

            <div>
              Files
              <strong>{files.length}</strong>
            </div>

            <div>
              Size
              <strong>
                {(totalSize / 1024 / 1024).toFixed(2)} MB
              </strong>
            </div>

          </div>
        )}

        {/* File List */}

        <div className="file-list">

          {files.map((file, index) => (

            <div
              className="file-card"
              key={index}
            >

              <div className="file-left">

                <div className="file-icon">

                  {file.type ===
                  "application/pdf"
                    ? "📄"
                    : "🖼️"}

                </div>

                <div>

                  <h4>{file.name}</h4>

                  <p>
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                </div>

              </div>

              <button
                className="delete-btn"
                onClick={() =>
                  removeFile(index)
                }
              >
                ✕
              </button>

            </div>

          ))}

        </div>

        {/* Merge Button */}

        <button
          className="merge-btn"
          disabled={files.length < 2}
        >
          ⚡ Create PDF
        </button>

      </div>

    </div>
  );
}

export default MergePdf;
