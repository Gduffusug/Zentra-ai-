import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./App";
import Chat from "./pages/Chat";
import MergePdf from "./pages/MergePdf";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<App />} />

      <Route path="/chat" element={<Chat />} />

      <Route
        path="/merge-pdf"
        element={<MergePdf />}
      />

    </Routes>
  </BrowserRouter>
);
