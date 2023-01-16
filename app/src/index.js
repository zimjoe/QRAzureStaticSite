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
    <header className="header row">
      <h1>Qrap.io</h1>
      <h2><span>Qrapio</span>QR Code Generator</h2>
    </header>
    <nav>
      <button onClick={()=>{toggleMenu("UrlForm", "WifiForm")}}>Url QR</button>
      <button onClick={()=>{toggleMenu("WifiForm", "UrlForm")}}>Wifi QR</button>
    </nav>
    <App />
    <footer>
      <div>An open source project for deploying a QR Azure App.</div>
      <ul>
        <li>
          <a href='https://github.com/zimjoe/QRAzureStaticSite'>https://github.com/zimjoe/QRAzureStaticSite</a>
        </li>
        <li>
          <a href='https://github.com/zimjoe/QRAzureFunctions'>https://github.com/zimjoe/QRAzureFunctions</a>
        </li>
      </ul>
      <div className='footer_aeveco'>Aeveco 2023</div>
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
