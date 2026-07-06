import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import jsPDF from "jspdf";
import "./MergePdf.css";

function MergePdf() {

  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);
  usestate(false);
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
    setFiles(files.filter((_, i) => i !== index));
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

        // ---------- PDF ----------
        if (pdfTypes.includes(file.type)) {

          const bytes = await file.arrayBuffer();
          const pdf = await PDFDocument.load(bytes);

          const pages = await mergedPdf.copyPages(
            pdf,
            pdf.getPageIndices()
          );

          pages.forEach((page) => {
            mergedPdf.addPage(page);
          });
        }

        // ---------- Images ----------
        else if (imageTypes.includes(file.type)) {

          const bytes = await file.arrayBuffer();

          const imgPdf = new jsPDF({
            orientation: "portrait",
            unit: "pt",
            format: "a4"
          });

          const img = new Image();

          const imageData = await new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = (e) => {
              img.onload = () => {
                resolve({
                  image: img,
                  src: e.target.result
                });
              };

              img.src = e.target.result;
            };

            reader.readAsDataURL(file);
          });

          const pageWidth = 595;
          const pageHeight = 842;

          const ratio = Math.min(
            pageWidth / imageData.image.width,
            pageHeight / imageData.image.height
          );

          const width = imageData.image.width * ratio;
          const height = imageData.image.height * ratio;

          const x = (pageWidth - width) / 2;
          const y = (pageHeight - height) / 2;

          imgPdf.addImage(
            imageData.src,
            "JPEG",
            x,
            y,
            width,
            height
          );

          const imgBytes = imgPdf.output("arraybuffer");

          const tempPdf = await PDFDocument.load(imgBytes);

          const pages = await mergedPdf.copyPages(
            tempPdf,
            tempPdf.getPageIndices()
          );

          pages.forEach((page) => {
            mergedPdf.addPage(page);
          });
        }
      }

      const mergedBytes = await mergedPdf.save();

      const blob = new Blob(
        [mergedBytes],
        {
          type: "application/pdf"
        }
      );

      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "ZentraAI-Merged.pdf";
      a.click();

      URL.revokeObjectURL(url);

      alert("✅ PDF created successfully!");

    } catch (err) {
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
          onDragLeave={() => setDragActive(false)}
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
            onChange={handleInputChange}
            hidden
          />

          <div className="upload-icon">📂</div>

          <h3>Choose Files</h3>

          <p>
            Drag & Drop PDF / Images here
          </p>

          <span className="upload-btn">
            Select Files
          </span>

        </label>

        {files.length > 0 && (

          <div className="file-list">

            <h3>
              Selected Files ({files.length})
            </h3>

            {files.map((file, index) => (

              <div
                className="file-item"
                key={index}
              >

                <span>
                  📄 {file.name}
                </span>

                <button
                  onClick={() => removeFile(index)}
                >
                  ✕
                </button>

              </div>

            ))}

            <div className="actions">

              <button
                className="clear-btn"
                onClick={clearFiles}
              >
                Clear
              </button>

              <button
                className="merge-btn"
                onClick={createPDF}
                disabled={loading}
              >
                {loading
                  ? "Creating..."
                  : "Create PDF"}
              </button>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default MergePdf;
