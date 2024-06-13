import ReactCodeMirror from "@uiw/react-codemirror";
import { color } from "@uiw/codemirror-extensions-color";
import { monokai } from '@uiw/codemirror-theme-monokai';
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";
import prettier from "prettier/standalone";
import prettierPluginHtml from "prettier/parser-html";
import prettierPluginBabel from "prettier/parser-babel";
import prettierPluginEstree from "prettier/parser-espree";
import prettierPluginCSS from "prettier/parser-postcss";
const img = (
  <img
    style={{ width: 28 }}
    src="data:image/png;base64,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"
  />
);

function App({ ext, elm }) {
  const [value, setValue] = useState(elm.dataset.value);
  useEffect(() => {
    elm.dispatchEvent(
      new CustomEvent("change", {
        detail: value,
      })
    );
  }, [value]);

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          position: "absolute",
          top: 4,
          right: 12,
          border: "1px solid #eee",
          background: "#fff",
          borderRadius: 4,
          boxShadow: "0 2px 4px #0002",
          zIndex: value?99:-1,
          cursor: "pointer",
        }}
        disabled={!value}
        onClick={async () => {
          if (value) {
            const val = await prettier.format(value, {
              parser: ext === "html" ? "html" : ext === "css" ? "css" : "babel",
              plugins: [
                prettierPluginBabel,
                prettierPluginEstree,
                prettierPluginHtml,
                prettierPluginCSS,
              ],
            });
            setValue(val);
          }
        }}
      >
        {img}
      </button>
      {ext === "html" ? (
        <>
          <ReactCodeMirror
            value={value}
            xw
            theme={monokai}
            autoFocus
            className={elm.dataset.class}
            minHeight="100px"
            maxHeight={elm.style.maxHeight || "500px"}
            extensions={[html({})]}
            placeholder="typing html code!"
            onChange={(value) => {
              setValue(value);
            }}
          />
        </>
      ) : ext === "css" ? (
        <>
          <ReactCodeMirror
            value={value}
            theme={monokai}
            autoFocus
            className={elm.dataset.class}
            minHeight="100px"
            maxHeight={elm.style.maxHeight || "500px"}
            extensions={[css(), color]}
            placeholder="typing css code!"
            onChange={(value) => {
              setValue(value);
            }}
          />
        </>
      ) : (
        <>
          <ReactCodeMirror
            value={value}
            theme={monokai}
            autoFocus
            className={elm.dataset.class}
            minHeight="100px"
            maxHeight={elm.style.maxHeight || "500px"}
            extensions={[javascript(), color]}
            placeholder="typing javascript code!"
            onChange={(value) => {
              setValue(value);
            }}
          />
        </>
      )}
    </div>
  );
}

export default App;
