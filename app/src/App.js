//import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/UrlQR?Url=",
      url: "https://github.com/zimjoe/QRAzureFunctions/wiki",
      urlValue: "",
      cansubmit: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleSubmit(event) {
    event.preventDefault();

    this.setState(state => ({
      url: this.state.urlValue,
      cansubmit: false
    }));

  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });

    // deal with minimal validation
    if(this.isValidUrl()){

    }else{

    }
  }

  isValidUrl(){
    return true;
  }
  render(){
    return (
      <div className="App">
       
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='UrlValue'>Enter a URL to create a code</label>
          <input 
            id='UrlValue' 
            name='urlValue'
            placeholder='https://'
            onChange={this.handleInputChange} />
          <button 
            type="submit"
            onClick={() => this.setState(state => ({url: "https://github.com"}))}
          >Submit</button>
        </form>

        <img 
          alt="QR Code for the entered URL" 
          className='qrcode' 
          src={this.state.base + this.state.url} 
        />
      </div>
    );
  }
}

export default App;
