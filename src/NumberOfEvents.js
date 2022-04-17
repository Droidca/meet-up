import React, { Component } from 'react';

class NumberOfEvents extends Component {

  state = {
    numberOfEvents: 32,
  }

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      numberOfEvents: value
    })

    this.props.updateNumberOfEvents(value);

  };


  render() {

    return <div className='eventNumber'>

      <input type='number' className='inputEventNumber' onChange={this.handleInputChange} value={this.state.numberOfEvents}>

      </input>

    </div>;
  }
}

export default NumberOfEvents