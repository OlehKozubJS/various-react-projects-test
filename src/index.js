import { StrictMode } from "react";
import { createRoot } from "react-dom";

const htmlRoot = document.getElementById("root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(<StrictMode>Hello! I am VioletFox!</StrictMode>);
