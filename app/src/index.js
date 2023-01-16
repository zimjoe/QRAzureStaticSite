import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Header from './Header';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// hinky solution for now.  Will fix later with a proper menu
const toggleMenu = (show, hide)=>{
  
  let showForm = document.getElementById(show + "Form");
  let hideForm = document.getElementById(hide + "Form");
  if(showForm && hideForm){
    showForm.className = "";
    hideForm.className = "hidden";
  }
  let showButton = document.getElementById("Nav" + show);
  let hideButton = document.getElementById("Nav" + hide);
  if(showButton && hideButton){
    hideButton.className = "";
    showButton.className = "current";
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <nav>
      <button id="NavUrl" className='current' onClick={()=>{toggleMenu("Url", "Wifi")}}>Make a Url QR</button>
      <button id="NavWifi" onClick={()=>{toggleMenu("Wifi", "Url")}}>Make a Wifi QR</button>
    </nav>

    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
