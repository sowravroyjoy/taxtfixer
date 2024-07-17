import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleCaClick = () => {
    let isSpace = false;
    let newText = "" + String.fromCharCode(text.charCodeAt(0)-32);
    let element;
    for (let index = 1; index < text.length; index++) {
      element = text.charCodeAt(index);
      if (element === 32){
        isSpace = true;
      }
      else if (isSpace === true){
        isSpace = false;
        element = element - 32;
      }
      newText = newText + String.fromCharCode(element);

    }
    setText(newText)
  }
  const handleClClick = () => {
    let newText = "";
    setText(newText)
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState("");
  return (
    <div>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="textbox" className="form-label">
          {props.heading}
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="textbox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCaClick}>
        Capitalize
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClClick}>
        Clear
      </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length - 1} words and {text.length} characters</p>
        <p>{text.split(" ").length - 1 * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
