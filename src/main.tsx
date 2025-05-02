import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { LoadingProvider } from "./providers/LoadingProvider.tsx";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import "./index.css";
import App from "./App.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <LoadingProvider>
          <ThemeProvider>
            <MantineProvider>
              <App />
            </MantineProvider>
          </ThemeProvider>
        </LoadingProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
