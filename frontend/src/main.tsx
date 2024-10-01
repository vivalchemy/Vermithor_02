import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain="dev-jrhabhsizfyzxi6p.us.auth0.com"
    clientId="YBEM69XA3cAun17laC1CeOOpQWZ8PxPo"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <StrictMode>
      <App />
    </StrictMode>
  </Auth0Provider>
);
