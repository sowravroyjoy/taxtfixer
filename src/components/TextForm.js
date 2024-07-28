import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  };
  const handleCoClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success");
  };
  const handleCaClick = () => {
    let isSpace = false;
    let newText = "";
    for (let index = 0; index < text.length; index++) {
      const element = text.charCodeAt(index);
      if (element === 32 || element === 10) {
        isSpace = true;
        newText = newText + String.fromCharCode(element);
      } else if (index === 0) {
        isSpace = true;
        newText = newText + String.fromCharCode(element);
      } else if (isSpace === true) {
        if (element > 96 && element < 123) {
          newText = newText + String.fromCharCode(element - 32);
        }
        isSpace = false;
      } else {
        newText = newText + String.fromCharCode(element);
      }
    }

    setText(newText);
    props.showAlert("Capitalized", "success");
  };

  const handleRmSpClick = () => {
    let newText = text.split(/[ ]+/);
    newText = newText.join(" ")
    
    if (newText[0] === " ") {
      newText = newText.substring(1);
      console.log(newText.substring(1));
    }
    setText(newText);
    props.showAlert("Extra spaces removed", "success");
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <div>
      <div className="container">
        <div className="mb-3">
          <h1 htmlFor="textbox" className="form-label">
            {props.heading}
          </h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="textbox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleCoClick}
        >
          Copy
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleCaClick}
        >
          Capitalize
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleRmSpClick}
        >
          Remove Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${
            props.mode === "light" ? "dark" : "secondary"
          } mx-2 my-2`}
          onClick={handleClClick}
        >
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length * 0.008}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text.length <= 0 ? "Nothing to preview here" : text}</p>
      </div>
    </div>
  );
}
