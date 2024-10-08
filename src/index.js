import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

const htmlRoot = document.getElementById("root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
