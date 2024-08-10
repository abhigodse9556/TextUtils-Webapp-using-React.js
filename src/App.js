import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Footer from './components/Footer';
import './components/Main.css';
import Navbar from './components/Navbar';
import TextArea from './components/TextArea';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3500);
  };

  // Load mode from localStorage or set default to 'light'
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');
  const [modeTxt, setModeTxt] = useState(mode === 'light' ? 'Enable dark mode' : 'Enable light mode');

  useEffect(() => {
    // Set the initial mode based on what's stored in localStorage
    document.body.style.backgroundColor = mode === 'light' ? 'white' : '#1b1e21';
    document.body.style.color = mode === 'light' ? 'black' : 'white';
  }, [mode]);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeTxt('Enable light mode');
      document.body.style.backgroundColor = "#1b1e21";
      document.body.style.color = "white";
      localStorage.setItem('mode', 'dark'); // Store mode in localStorage
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode('light');
      setModeTxt('Enable dark mode');
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      localStorage.setItem('mode', 'light'); // Store mode in localStorage
      showAlert("Light mode has been enabled", "Success");
    }
  };
  const toggleActive = (event) => {
    const elementId = event.target.id || 'noID';

    // Save the clicked element's ID in localStorage
    localStorage.setItem('activeLink', elementId);

    updateActiveClass(elementId);
};

const updateActiveClass = (elementId) => {
    let home = document.querySelector('#homeLink');
    let about = document.querySelector('#aboutLink');

    if (elementId === 'homeLink' || elementId === 'noID') {
        home.classList.add('active');
        about.classList.remove('active');
    } else {
        home.classList.remove('active');
        about.classList.add('active');
    }
};

// This useEffect will run once when the component mounts
useEffect(() => {
    // Retrieve the active link from localStorage
    const activeLink = localStorage.getItem('activeLink') || 'homeLink';
    
    // Apply the active class to the correct element
    updateActiveClass(activeLink);
}, []);


  return (
    <>
      <Router>
        <Navbar title='TextUtilify' mode={mode} toggleMode={toggleMode} modeTxt={modeTxt} toggleActive={toggleActive} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />
            <Route path="/" element={<TextArea heading="Elevate Your Text in Just One Click" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
