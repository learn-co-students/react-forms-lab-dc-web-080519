import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateContent = (e) => {
    this.setState({message: e.target.value}, ()=>console.log(this.state.message))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          message={this.state.message}
          onChange={this.updateContent}
          />
        <p>Remaining characters: {this.props.maxChars - this.state.message.length}</p>
        </div>
      );
    }
  }

  export default TwitterMessage;
