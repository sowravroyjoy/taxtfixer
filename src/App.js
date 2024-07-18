import react, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.color = 'white'
      document.body.style.backgroundColor = '#212529'
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('light')
      document.body.style.color = 'black'
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <>
      <Navbar title = "TextFixer" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading = "Enter your text to analyze" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
        </div>
    </>
  );
}

export default App;
