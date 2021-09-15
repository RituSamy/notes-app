import React, { Component } from "react";

class Notepad extends Component {
  handleText = (event) => {
    this.props.editNote(this.props.note.id, event.target.value);
  };

  render() {
    return (
      <textarea
        id="myTextArea"
        rows={15}
        cols={60}
        placeholder="New Note"
        style={{ borderColor: "#FFADDB" }}
        value={this.props.note.content}
        onChange={this.handleText}
      />
    );
  }
}

export default Notepad;
