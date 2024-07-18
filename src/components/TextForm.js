import React, { useState } from "react";

export default function TextForm(props) {
  // const countWords = (word)=>{
  //   let totalWords = 0
  //   let words = text.split[" "];
  //   for (let i = 0; i < words.length; i++) {
  //     let word = words[i];
  //     for (let j = 0; j < word.length; j++) {
  //       let character = word.at(j);
  //       if(character !== " "){
  //         totalWords= totalWords + 1;
  //       }
        
  //     }
      
  //   }
  //   return totalWords;
  // }
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success")
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success")
  };
  const handleCoClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied", "success")
  };
  const handleCaClick = () => {
    let isSpace = false;
    let newText = "" + String.fromCharCode(text.charCodeAt(0) - 32);
    let element;
    for (let index = 1; index < text.length; index++) {
      element = text.charCodeAt(index);
      if (element === 32) {
        isSpace = true;
      } else if (isSpace === true) {
        isSpace = false;
        element = element - 32;
      }
      newText = newText + String.fromCharCode(element);
    }
    setText(newText);
    props.showAlert("Capitalized", "success")
  };

  const handleRmSpClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  };

  const handleClClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

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
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            id="textbox"
            rows="8"
          ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleCoClick}>
          Copy
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleCaClick}>
          Capitalize
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleRmSpClick}>
          Remove Extra Spaces
        </button>
        <button className={`btn btn-${props.mode==='light'?'dark':'secondary'} mx-2 my-2`} onClick={handleClClick}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <p>{text.split(" ").length - 1 * 0.008} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length<=0?"Enter something in the above text box to preview it here":text}</p>
      </div>
    </div>
  );
}
