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
      cansubmit: false
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
              alt: newAlt,
              url: URL.createObjectURL(myBlob),
              cansubmit: true
            }));
          }
          
        });
      }else{
        // handle error
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
      </div>
    );
  }
}

export default App;
