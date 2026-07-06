import React, { useState } from "react";
import { PDFDocument } from "pdf-lib";
import jsPDF from "jspdf";
import "./MergePdf.css";

function MergePdf() {

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const [outputName, setOutputName] =
    useState("ZentraAI-Merged");

  const imageTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp"
  ];

  const pdfTypes = [
    "application/pdf"
  ];

  // =========================
  // Add Files
  // =========================

  const handleFiles = (selectedFiles) => {

    const newFiles = Array.from(selectedFiles);

    if (newFiles.length === 0) return;

    setFiles((prev) => [...prev, ...newFiles]);

  };

  const handleInputChange = (e) => {

    handleFiles(e.target.files);

  };

  // =========================
  // Remove File
  // =========================

  const removeFile = (index) => {

    setFiles(
      files.filter((_, i) => i !== index)
    );

  };

  // =========================
  // Clear Files
  // =========================

  const clearFiles = () => {

    setFiles([]);

  };
  // =========================
// Create PDF
// =========================

const createPDF = async () => {

  if (files.length === 0) {
    alert("Please select files first.");
    return;
  }

  setLoading(true);

  try {

    const mergedPdf = await PDFDocument.create();

    for (const file of files) {

      // =========================
      // PDF Files
      // =========================

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

      // =========================
      // Image Files
      // =========================

      else if (imageTypes.includes(file.type)) {

        const imageData = await new Promise((resolve) => {

          const reader = new FileReader();

          reader.onload = (e) => {

            resolve(e.target.result);

          };

          reader.readAsDataURL(file);

        });

        const img = new Image();

        await new Promise((resolve) => {

          img.onload = resolve;

          img.src = imageData;

        });

        const imagePdf = new jsPDF({

          orientation: "portrait",

          unit: "pt",

          format: "a4"

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

        imagePdf.addImage(

          imageData,

          file.type === "image/png"
            ? "PNG"
            : "JPEG",

          x,
          y,
          width,
          height

        );

        const pdfBytes =
          imagePdf.output("arraybuffer");

        const tempPdf =
          await PDFDocument.load(pdfBytes);

        const copiedPages =
          await mergedPdf.copyPages(

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

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

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

<div className="bg-circle circle1"></div>
<div className="bg-circle circle2"></div>
<div className="bg-circle circle3"></div>

<div className="merge-container">

<h1>📄 Merge PDF</h1>

<p className="subtitle">
Merge PDF files & Images into one beautiful PDF
</p>

<input
type="text"
className="filename-input"
placeholder="Output File Name"
value={outputName}
onChange={(e)=>setOutputName(e.target.value)}
/>

<label

className={`upload-box ${dragActive ? "active" : ""}`}

onDragOver={(e)=>{
e.preventDefault();
setDragActive(true);
}}

onDragLeave={()=>{
setDragActive(false);
}}

onDrop={(e)=>{
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

<h2>
Drop Files Here
</h2>

<p>
PDF • PNG • JPG • JPEG • WEBP
</p>

<span className="upload-btn">

Select Files

</span>

</label>

{

files.length>0 && (

<>

<div className="file-list">

{

files.map((file,index)=>(

<div

className="file-item"

key={index}

>

<div>

📄 {file.name}

</div>

<button

className="delete-btn"

onClick={()=>removeFile(index)}

>

✕

</button>

</div>

))

}

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

{

loading

?

"Creating PDF..."

:

"Create PDF"

}

</button>

</div>

</>

)

}

</div>

</div>

);
  }

export default MergePdf;
