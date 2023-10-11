import React, { Component } from 'react';
import "../style/navbar.css";
import '../style/bootstrap.min.css';
//
class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(), //
    };
    //console.log(this.state.time);
  }

  componentDidMount() {
    console.log("from did mount")
    // Update the clock every second
    this.intervalID = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    console.log("from will unmount")
    // Clear the interval when the component unmounts
    clearInterval(this.intervalID);
  }

  render() {
    
    return (
      <div className='clock-container'>
        <h1 className='clock-text'>{this.state.time}</h1>
      </div>
    );
  }
}

export default DigitalClock;