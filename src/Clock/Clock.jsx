import React, { Component } from "react";
import {} from "./Clock.styled";

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  intervalId = null;

  componentDidMount() {
    // console.log("componentDidMount => setInterval");
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    );
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount -> clear intervalId");

    // Якщо не видаляти встановлений setInterval, то буде витік пам'яті (memory leak)
    clearInterval(this.intervalId);
  }

  render() {
    return <div>{this.state.time}</div>;
  }
}

export default Clock;
