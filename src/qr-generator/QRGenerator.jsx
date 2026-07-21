import { useState } from "react";
import QRCode from "react-qr-code";
import "./QRGenerator.css";
import { qrTypes } from "./qrUtils";

export default function QRGenerator() {
  const [type, setType] = useState("website");
  const [value, setValue] = useState("");

  return (
    <div className="qr-generator">

      <h1>QR Code Generator</h1>

      <div className="qr-tabs">
        {qrTypes.map((item) => (
          <button
            key={item.id}
            className={type === item.id ? "active" : ""}
            onClick={() => setType(item.id)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className="qr-input">

        <input
          type="text"
          placeholder={`Enter ${type}`}
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
