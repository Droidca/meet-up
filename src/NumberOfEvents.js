import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
    errorText: ''
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    if (value <= 0 || value > 32) {
      this.setState({
        errorText: 'Please insert a number beetween 1 and 32'
      })
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: ''
      })
    }

  };


  render() {

    return <div className='eventNumber'>

      <ErrorAlert text={this.state.errorText} />

      <p>Choose Number of Events to Display</p>

      <input type='number' className='inputEventNumber' onChange={this.handleInputChange} value={this.state.numberOfEvents}>

      </input>

    </div>;
  }
}

export default NumberOfEvents