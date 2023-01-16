//import logo from './logo.svg';
import React from 'react';
import './App.css';
import  UrlForm from './components/UrlForm.js';
import  WiFiForm from './components/WiFiForm.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/",
      url: "/UrlQR.png",
      alt: "QR Code for the Project Wiki",
      serverError:"",
      cansubmit: false,
      loadingBarClass:'hidden'
    };
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.callService = this.callService.bind(this);
  }

  // Allows the forms to elevate the finished URL
  handleUrlChange(newUrl, newAlt){
    console.log(this.state.base + newUrl)
    this.setState(state => ({
      url: this.state.base + newUrl,
      cansubmit: true
    }));
  }

  callService(newUrl, body, newAlt){
    console.log(this.state.base + newUrl);
    this.setState(state => ({
      url:"",
      loadingBarClass:''
    }));
    fetch(this.state.base + newUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: body
    })
    .then((response) => {
      if(response.headers.get("content-type")==="image/png"){
        response.blob().then((myBlob) => {
          if(myBlob){
            console.log(URL.createObjectURL(myBlob))
            this.setState(state => ({
              serverError: "",
              alt: newAlt,
              url: URL.createObjectURL(myBlob),
              cansubmit: true,
              loadingBarClass:'hidden'
            }));
          }
          
        });
      }else{
        response.json()
        .then((data) => {
          console.log(data);
          this.setState(state => ({
            serverError: "Server Error: " + data[0]?.error,
            url: "",
            alt: "",
            loadingBarClass:'hidden'
          }));
        });
      }
    });
  }

  render(){
    return (
      <div className="app">
       
        <UrlForm  handleUrlChange={this.handleUrlChange} callService={this.callService} />
        <WiFiForm  handleUrlChange={this.handleUrlChange} callService={this.callService} />
        <pre>
          {this.state.serverError} 
        </pre>
        
        <img 
          alt={this.state.alt}  
          className='qrcode' 
          src={this.state.url} 
        />
        <svg id="loading-bar" className={this.state.loadingBarClass} xmlns="http://www.w3.org/2000/svg" width="36" height="22" viewBox="0 0 36 22">
          <g>
            <rect id="loading-bar-left" width="8" height="22"/>
            <rect id="loading-bar-middle" width="8" height="22" x="14"/>
            <rect id="loading-bar-right" width="8" height="22" x="28"/>
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
