import ReactCodeMirror from "@uiw/react-codemirror";
import { color } from "@uiw/codemirror-extensions-color";
import { quietlight } from "@uiw/codemirror-theme-quietlight";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";

function App({ ext, elm }) {
  const [value, setValue] = useState(elm.dataset.value);
  useEffect(() => {
    elm.dispatchEvent(
      new CustomEvent("change", {
        detail: value,
      })
    );
  }, [value]);

  return ext === "html" ? (
    <ReactCodeMirror
      value={value}
      theme={quietlight}
      autoFocus
      className={elm.dataset.class}
      minHeight="100px"
      maxHeight={elm.style.maxHeight || "300px"}
      extensions={[html({})]}
      placeholder="typing html code!"
      onChange={(value) => {
        setValue(value);
      }}
    />
  ) : ext === "css" ? (
    <ReactCodeMirror
      value={value}
      theme={quietlight}
      autoFocus
      className={elm.dataset.class}
      minHeight="100px"
      maxHeight={elm.style.maxHeight || "300px"}
      extensions={[css(), color]}
      placeholder="typing css code!"
      onChange={(value) => {
        setValue(value);
      }}
    />
  ) : (
    <ReactCodeMirror
      value={value}
      theme={quietlight}
      autoFocus
      className={elm.dataset.class}
      minHeight="100px"
      maxHeight={elm.style.maxHeight || "300px"}
      extensions={[javascript(), color]}
      placeholder="typing javascript code!"
      onChange={(value) => {
        setValue(value);
      }}
    />
  );
}

export default App;
