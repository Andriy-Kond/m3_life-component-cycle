import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    message: "",
  };

  handleChange = e => {
    this.setState({ message: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddTodo(this.state.message);
    this.setState({ message: "" });
  };

  render() {
    const { message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea value={message} onChange={this.handleChange} />
        <button type="submit">Add task</button>
      </form>
    );
  }
}

export default AddTodo;
