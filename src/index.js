import { StrictMode } from "react";
import { createRoot } from "react-dom";

const htmlRoot = document.getElementById("root");
const reactRoot = createRoot(htmlRoot);

reactRoot.render(
  <StrictMode>
    Hello!{<br />} I am VioletFox!{<br />} Progress Wins Again!{<br />}
    Keroberos
  </StrictMode>
);
