import { createRoot } from "react-dom/client";
import App from "./App.jsx";

window.onload = () => {
  document.querySelectorAll('.code-editor').forEach(elm => {
    const root = createRoot(elm);
    const extension = elm.dataset.extension || "html"
    root.render(
      <App ext={extension} elm={elm} />
    );
    elm.addEventListener('change', val => elm.dataset.value = val.detail)
  })
}