import { useState } from "react";
import QRCode from "react-qr-code";
import "./QRGenerator.css";
import { qrTypes } from "./qrUtils";

export default function QRGenerator() {
  const [qrType, setQrType] = useState("website");
  const [value, setValue] = useState("");
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Generate QR value based on type
  const generateQRValue = () => {
    switch (qrType) {
      case "website":
        return value.trim() ? (value.startsWith("http") ? value : `https://${value}`) : "";
      case "text":
        return value;
      case "email":
        return email.trim() ? `mailto:${email}` : "";
      case "wifi":
        return ssid.trim() && password.trim() 
          ? `WIFI:T:WPA;S:${ssid};P:${password};;` 
          : "";
      default:
        return value;
    }
  };

  const qrValue = generateQRValue();

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

        {qrType === "website" && (
          <input
            type="text"
            placeholder="https://example.com"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        {qrType === "text" && (
          <input
            type="text"
            placeholder="Enter your text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}

        {qrType === "email" && (
          <input
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}

        {qrType === "wifi" && (
          <>
            <input
              type="text"
              placeholder="SSID"
              value={ssid}
              onChange={(e) => setSsid(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </>
        )}

      </div>

      <div className="qr-preview">

        {qrValue ? (
          <QRCode
            value={qrValue}
            size={250}
          />
        ) : (
          <p>Enter something to generate QR.</p>
        )}

      </div>

    </div>
  );
}
