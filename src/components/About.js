import React from "react";

export default function About(props) {
  const myStyle={
    backgroundColor: props.mode === "light" ? "white" : "#212529",
    color: props.mode === "light" ? "black" : "white",
  }
  return (
    <div>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                About Textfixer
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is a text analyzer website which can fix and analyze your text content according to your needs. It is not only browser but also device compatible. It has been built using React, BootStrap.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                About Me
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <strong>I am Sowrav Roy Joy.</strong>  I recently have passed out my Master's Degree in Electrical and Computer Engineering where I have major in Computer Engineering. I have been doing programming from my bechelor days and right now trying to learn new technologies which catches my interest and needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
