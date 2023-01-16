import React from 'react';
import Button from './Button.js';

class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/UrlQR?Url=",
      url: "https://github.com/zimjoe/QRAzureFunctions/wiki",
      urlValue: "https://github.com/zimjoe/QRAzureFunctions/wiki",
      urlValueClass:"",
      cansubmit: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
 
  handleSubmit(event) {
    event.preventDefault();
    this.props.handleUrlChange("UrlQR?url=" +this.state.urlValue, "Url QR COde"); 
  }
  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });

  }
  handleKeyUp(event){
    const name = event.target.name + "Class"
    this.setState({ [name]: "validation" });
  }

  render(){
    return (
        <form onSubmit={this.handleSubmit} id="UrlForm"  className="form urlForm">
        <label className='h3' htmlFor='UrlValue'>Enter a URL to create a QR Code </label>
          <div className='column'>
            <input 
              id='UrlValue' 
              className={this.state.urlValueClass}
              name='urlValue'              
              autoComplete='off'
              placeholder='https://'
              value={this.state.urlValue}
              required={true}
              title="https:// or http:// urls only"
              pattern="^(https?://)[\w\W]+"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleInputChange} />
            <Button className='button_stack' />
            
          </div>
        </form>

    );
  }
}

export default UrlForm;