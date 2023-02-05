import React from 'react';
import Button from './Button.js';

class WiFiForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wifiName: "",
      passcode:"",
      cansubmit: false,
      wifiNameClass:"", 
      passcodeClass:""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
 
  handleSubmit(event) {
    event.preventDefault();
    let newUrl = `WiFiQR`;
    
    
    //this.props.handleUrlChange(newUrl, "WiFi QR Code"); 
    let body = JSON.stringify({
        wifiname: this.state.wifiName,
        passcode:this.state.passcode
    });
    this.props.callService(newUrl, body, "WiFi QR Code"); 
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
        <form onSubmit={this.handleSubmit} id="WifiForm" className="hidden">
            <h3>Create a WiFi QR Code</h3>
            <div className='column'>
                <label htmlFor='WifiName'>SSID <i>(Minimum 4 characters)</i></label>
                <input 
                id='WifiName' 
                className={this.state.wifiNameClass}
                name='wifiName'
                autoComplete='off'
                value={this.state.wifiName}
                placeholder='WiFi Name'
                title="Minimum 4 character SSID"
                required={true}
                pattern="^.{4,64}$"
                maxLength={64}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleInputChange} />
            </div>
        
            <div className='column'>
            <label htmlFor='Passcode'>Passcode <i>(Minimum 12 characters)</i></label>
            <input 
                id='Passcode' 
                className={this.state.passcodeClass}
                name='passcode'
                autoComplete='off'
                value={this.state.passcode}
                required={true}
                placeholder='Long passcode no one will guess'
                title="Minimum 12 character passcode"
                pattern="^.{12,64}$"
                maxLength={64}
                onKeyUp={this.handleKeyUp}
                onChange={this.handleInputChange} />
            <Button className='button_stack'>Submit WiFi QR</Button>
            
            </div>
        </form>

    );
  }
}

export default WiFiForm;