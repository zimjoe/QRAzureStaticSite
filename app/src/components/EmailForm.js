import React from 'react';
import Button from './Button.js';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/",
      mailReceiverValue: "",
      mailReceiverValueClass:"",
      subjectValue: "",
      subjectValueClass:"",
      messageValue: "",
      messageValueClass:"",
      cansubmit: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
 
  handleSubmit(event) {
    event.preventDefault();

    let newUrl = "MailQR";
    console.log(newUrl);

    let body = JSON.stringify({
        MailReceiver: this.state.mailReceiverValue,
        Subject: this.state.subjectValue,
        Message:this.state.messageValue
    });
    this.props.callService(newUrl, body, "Email QR Code"); 

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
        <form onSubmit={this.handleSubmit} id="EmailForm"  className="hidden">
        <h3>Create an Email Message QR Code</h3>
        
          <div className='column'>
            <label htmlFor='MailReciever'>Send To <i>(using standard email format)</i> </label>
            <input 
              id='MailReciever' 
              className={this.state.mailReceiverValueClass}
              name='mailReceiverValue'              
              autoComplete='off'
              placeholder='me@myemail.com'
              value={this.state.mailReceiverValue}
              required={true}
              title="Who do we send this to"
              type="email"
              maxLength={200}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleInputChange} />
            <label htmlFor='Subject'>Subject </label>
            <input 
              id='Subject' 
              className={this.state.subjectValueClass}
              name='subjectValue'              
              autoComplete='off'
              placeholder='optional'
              value={this.state.subjectValue}
              title="Email Subject"
              maxLength={100}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleInputChange} />
              <label htmlFor='EmailMessage'>Email Message </label>
            <textarea 
              id='EmailMessage' 
              className={this.state.messageValueClass}
              name='messageValue'              
              autoComplete='off'
              placeholder='optional'
              value={this.state.messageValue}
              title="Email Message"
              maxLength={200}
              onKeyUp={this.handleKeyUp}
              onChange={this.handleInputChange} />
            <Button className='button_stack'>Submit Email QR</Button>
            
          </div>
        </form>

    );
  }
}

export default EmailForm;