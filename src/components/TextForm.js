import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleDownClick = () => {
    let newText = text.toLowerCase();
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
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert to Lowercase
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
