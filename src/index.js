import { createRoot } from "react-dom/client";
import App from "./App.jsx";

window.onload = () => {
  document.querySelectorAll('.code-editor').forEach(elm => {
    const root = createRoot(elm);
    root.render(
      <App elm={elm} />
    );
    elm.addEventListener('change', val => elm.dataset.value = val.detail)
  })
}