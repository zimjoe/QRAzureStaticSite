import React from "react";
import Button from "./Button.js";

class UrlForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: "https://joesazurefunction.azurewebsites.net/api/UrlQR?Url=",
      url: "",
      urlValue: "",
      urlValueClass: "",
      cansubmit: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //this.props.handleUrlChange("UrlQR?url=" +this.state.urlValue, "Url QR COde");

    //?wifiname=KidsAndDogsAreCool&passcode=HelloMyLittleFriendAndPals
    let newUrl = "UrlQR";
    console.log(newUrl);

    //this.props.handleUrlChange(newUrl, "WiFi QR Code");
    let body = JSON.stringify({
      url: this.state.urlValue,
    });
    this.props.callService(newUrl, body, "Url QR Code");
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }
  handleKeyUp(event) {
    const name = event.target.name + "Class";
    this.setState({ [name]: "validation" });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} id="UrlForm" className="form urlForm">
        <h3>Create a Url QR Code</h3>

        <div className="column">
          <label htmlFor="UrlValue">
            Url <i>(must start with http:// or https://)</i>{" "}
          </label>
          <input
            id="UrlValue"
            className={this.state.urlValueClass}
            name="urlValue"
            autoComplete="off"
            placeholder="https://"
            value={this.state.urlValue}
            required={true}
            title="https:// or http:// urls only"
            pattern="^[hH][tT][tT][pP][sS]?://[\w\W]+"
            onKeyUp={this.handleKeyUp}
            onChange={this.handleInputChange}
          />
          <Button className="button_stack">Submit Url QR</Button>
          <div class="printonly">
            <div>{this.state.urlValue}</div>
          </div>
        </div>
      </form>
    );
  }
}

export default UrlForm;
