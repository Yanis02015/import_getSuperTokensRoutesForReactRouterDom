import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// I don't know why I got this TypeScript error

// Module '"supertokens-auth-react/ui/index"' has no exported member
// 'getSuperTokensRoutesForReactRouterDom'. Did you mean to use
// 'import getSuperTokensRoutesForReactRouterDom from "supertokens-auth-react/ui/index"'
// instead?ts(2614)

import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react/ui";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
