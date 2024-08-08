import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import './components/Main.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, {useState} from 'react';
function App() {
  
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }

  const [mode, setMode] = useState('light')
  const [modeTxt, setModeTxt] = useState('Enable dark mode')

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      setModeTxt('Enable light mode')
      document.body.style.backgroundColor = "#1b1e21"
      document.body.style.color = "white"
      showAlert("Dark mode has been enabled", "Success")
    }
    else{
      setMode('light')
      setModeTxt('Enable dark mode')
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
      showAlert("Light mode has been enabled", "Success")
    }
  }


      
  return (
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <Alert alert={alert}/>
      <div className="container">
        <TextArea heading="Enter the Text to Analyze Below" mode={mode} showAlert={showAlert}/>
      </div>
      <About mode={mode}/>
    </>
  );
}

export default App;
