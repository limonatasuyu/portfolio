import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PopupProvider } from "./contexts/popupContext";
import { MovingProvider } from "./contexts/movingContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PopupProvider>
      <MovingProvider>
        <App />
      </MovingProvider>
    </PopupProvider>
  </React.StrictMode>
);
