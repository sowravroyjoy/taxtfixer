import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // const removeBodyClasses= () => {
  //     document.body.classList.remove('bg-light')
  //     document.body.classList.remove('bg-dark')
  //     document.body.classList.remove('bg-primary')
  //     document.body.classList.remove('bg-danger')
  //     document.body.classList.remove('bg-success')
  //     document.body.classList.remove('bg-warning')
  // }

  const toggleMode = (cls) => {
    // console.log(cls)
    // removeBodyClasses()
    // document.body.classList.add('bg-' + cls)
    if (mode === "light") {
      setMode("dark");
      document.body.style.color = "white";
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
    // showAlert(cls + " mode has been enabled", "success");
  };
  return (
    <>
      <Router basename="/textfixer">
        <Navbar title="TextFixer" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Try TextFixer - Text Manipulator"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
