import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
