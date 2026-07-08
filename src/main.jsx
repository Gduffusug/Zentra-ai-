import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Chat from "./pages/Chat";
import MergePdf from "./pages/pdf/MergePdf";
import AgeCalculator from "./pages/AgeCalculator";
import Login from "./components/Login";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/chat" element={<Chat />} />

        <Route path="/merge-pdf" element={<MergePdf />} />

        <Route
          path="/age-calculator"
          element={<AgeCalculator />}
        />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
