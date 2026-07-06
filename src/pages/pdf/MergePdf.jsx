import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import jsPDF from "jspdf";
import "./MergePdf.css";

function MergePdf() {

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const [outputName, setOutputName] = useState("ZentraAI-Merged");

  const imageTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
  ];

  const pdfTypes = [
    "application/pdf"
  ];

  const handleFiles = (selectedFiles) => {

    const list = Array.from(selectedFiles);

    if (list.length === 0) return;

    setFiles((prev) => [...prev, ...list]);

  };

  const handleInputChange = (e) => {

    handleFiles(e.target.files);

  };

  const removeFile = (index) => {

    setFiles(
      files.filter((_, i) => i !== index)
    );

  };

  const clearFiles = () => {

    setFiles([]);

  };
  const createPDF = async () => {

  if (files.length === 0) {
    alert("Please select files first.");
    return;
  }

  setLoading(true);

  try {

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {

      // ================= PDF =================

      if (pdfTypes.includes(file.type)) {

        const bytes = await file.arrayBuffer();

        const pdf = await PDFDocument.load(bytes);

        const copiedPages = await mergedPdf.copyPages(
          pdf,
          pdf.getPageIndices()
        );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });

      }

      // ================= IMAGE =================

      else if (imageTypes.includes(file.type)) {

        const reader = new FileReader();

        const imageData = await new Promise((resolve) => {

          reader.onload = (e) => {

            resolve(e.target.result);

          };

          reader.readAsDataURL(file);

        });

        const imagePdf = new jsPDF({
          orientation: "portrait",
          unit: "pt",
          format: "a4"
        });

        const img = new Image();

        await new Promise((resolve) => {

          img.onload = resolve;

          img.src = imageData;

        });

        const pageWidth = 595;
        const pageHeight = 842;

        const ratio = Math.min(
          pageWidth / img.width,
          pageHeight / img.height
        );

        const width = img.width * ratio;
        const height = img.height * ratio;

        const x = (pageWidth - width) / 2;
        const y = (pageHeight - height) / 2;

        const format =
          file.type === "image/png"
            ? "PNG"
            : "JPEG";

        imagePdf.addImage(
          imageData,
          format,
          x,
          y,
          width,
          height
        );

        const pdfBytes = imagePdf.output("arraybuffer");

        const tempPdf = await PDFDocument.load(pdfBytes);

        const copiedPages = await mergedPdf.copyPages(
          tempPdf,
          tempPdf.getPageIndices()
        );

        copiedPages.forEach((page) => {
          mergedPdf.addPage(page);
        });

      }

    }

    const finalPdf = await mergedPdf.save();

    const blob = new Blob(
      [finalPdf],
      {
        type: "application/pdf"
      }
    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${outputName}.pdf`;

    link.click();

    URL.revokeObjectURL(url);

    alert("✅ PDF created successfully!");

  }

  catch (err) {

    console.error(err);

    alert("❌ Failed to create PDF.");

  }

  setLoading(false);

};
  return (

  <div className="merge-page">

    <div className="merge-container">

      <h1>📄 Merge PDF</h1>

      <p className="subtitle">
        Merge PDF files and Images into one PDF
      </p>

      <label
        className={`upload-box ${dragActive ? "active" : ""}`}

        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}

        onDragLeave={() => {
          setDragActive(false);
        }}

        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFiles(e.dataTransfer.files);
        }}
      >

        <input
          type="file"
          multiple
          accept=".pdf,.png,.jpg,.jpeg,.webp"
          hidden
          onChange={handleInputChange}
        />

        <div className="upload-icon">
          📂
        </div>

        <h3>
          Select your files
        </h3>

        <p>
          Drag & Drop PDF / Images here
        </p>

        <span className="upload-btn">
          Browse Files
        </span>

      </label>

      {files.length > 0 && (

        <>

          <div className="output-box">

            <label>
              Output PDF Name
            </label>

            <input
              type="text"
              value={outputName}
              placeholder="Enter file name"

              onChange={(e) =>
                setOutputName(e.target.value)
              }

            />

          </div>

          <div className="file-list">

            <h3>

              Selected Files ({files.length})

            </h3>
            {files.map((file, index) => (

              <div
                className="file-item"
                key={index}
              >

                <div className="file-left">

                  <div className="file-icon">

                    {file.type === "application/pdf"
                      ? "📄"
                      : "🖼️"}

                  </div>

                  <div className="file-info">

                    <h4>

                      {file.name}

                    </h4>

                    <p>

                      {(file.size / 1024 / 1024).toFixed(2)} MB

                    </p>

                  </div>

                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFile(index)}
                >

                  ✕

                </button>

              </div>

            ))}

          </div>

          <div className="actions">

            <button
              className="clear-btn"
              onClick={clearFiles}
            >

              Clear All

            </button>

            <button
              className="merge-btn"
              onClick={createPDF}
              disabled={loading}
            >

              {loading
                ? "Creating PDF..."
                : "Create PDF"}

            </button>

          </div>

        </>

      )}
}

export default MergePdf;
    </div>

  </div>
);
  
  
