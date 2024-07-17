import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "TextFixer" aboutText = "About Us"/>
      <div className="container my-3">
      {/* <TextForm heading = "Enter your text to analyze"/> */}
      <About/>
        </div>
    </>
  );
}

export default App;
