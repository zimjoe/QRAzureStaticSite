//import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import Home from "./pages";
import EmailQR from "./pages/EmailQR";
import UrlQr from "./pages/UrlQR";
import WifiQR from "./pages/WifiQR";
//import Contact from "./pages/contact";

function App() {
  // hinky solution for now.  Will fix later with a proper menu

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/why_use_an_email_qr" element={<EmailQR />} />
        <Route path="/why_use_a_wifi_qr" element={<WifiQR />} />
        <Route path="/why_use_a_url_qr" element={<UrlQr />} />
      </Routes>
    </Router>
  );
}

export default App;
