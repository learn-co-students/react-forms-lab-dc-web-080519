import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

handleMessage = (e) => {
  this.setState({
    message: e.target.value
  }, () => {console.log(this.state)})
}


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message"
          value={this.state.message}
          onChange={this.handleMessage}
         />
       <p>{this.props.maxChars - this.state.message.length} characters remaining </p>
      </div>
    );
  }
}

export default TwitterMessage;
