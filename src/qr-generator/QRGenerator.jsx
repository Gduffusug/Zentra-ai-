import { useState } from "react";
import QRCode from "react-qr-code";
import "./QRGenerator.css";
import { qrTypes } from "./qrUtils";

export default function QRGenerator() {
  const [qrType, setQrType] = useState("website");
  const [value, setValue] = useState("");

  return (
    <div className="qr-generator">

      <h1>QR Code Generator</h1>

      <div className="type-selector">
        <button
          className={qrType === "website" ? "active" : ""}
          onClick={() => setQrType("website")}
        >
          🌐 Website
        </button>

        <button
          className={qrType === "text" ? "active" : ""}
          onClick={() => setQrType("text")}
        >
          📝 Text
        </button>

        <button
          className={qrType === "wifi" ? "active" : ""}
          onClick={() => setQrType("wifi")}
        >
          📶 WiFi
        </button>

        <button
          className={qrType === "email" ? "active" : ""}
          onClick={() => setQrType("email")}
        >
          ✉️ Email
        </button>
      </div>

      <div className="qr-input">

        <input
          type="text"
          placeholder={`Enter ${qrType}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

      </div>

      <div className="qr-preview">

        {value ? (
          <QRCode
            value={value}
            size={250}
          />
        ) : (
          <p>Enter something to generate QR.</p>
        )}

      </div>

    </div>
  );
}
