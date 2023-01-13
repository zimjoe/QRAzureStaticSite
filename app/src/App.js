//import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/UrlQR?Url=",
      url: "https://github.com/zimjoe/QRAzureFunctions/wiki",
      urlValue: "https://github.com/zimjoe/QRAzureFunctions/wiki",
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

  // straight up stolen from https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/
  isValidUrl = urlString=> {
      var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
      '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
    return !!urlPattern.test(urlString);
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
        <label htmlFor='UrlValue'>Enter a URL to create a code</label>
          <div className='row'>
            <input 
              id='UrlValue' 
              name='urlValue'
              placeholder='https://'
              value={this.state.urlValue}
              onChange={this.handleInputChange} />
            <button 
              type="submit"
              onClick={() => this.setState(state => ({url: "https://github.com"}))}
            >Submit</button>
          </div>
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
