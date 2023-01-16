import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import Header from './Header';
import App from './App';
//import reportWebVitals from './reportWebVitals';

// hinky solution for now.  Will fix later with a proper menu
const toggleMenu = (show, hide)=>{
  let showForm = document.getElementById(show);
  let hideForm = document.getElementById(hide);
  if(showForm && hideForm){
    showForm.className = "";
    hideForm.className = "hidden";
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <nav>
      <button onClick={()=>{toggleMenu("UrlForm", "WifiForm")}}>Url QR</button>
      <button onClick={()=>{toggleMenu("WifiForm", "UrlForm")}}>Wifi QR</button>
    </nav>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
