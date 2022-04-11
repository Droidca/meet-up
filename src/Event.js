import React, { Component } from 'react';

class Event extends Component {

  state = {
    collapsed: true
  }

  handleDetailsClicked = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };


  render() {

    return <div className='event'>
      <button className='show_hide_button' onClick={this.handleDetailsClicked}></button>
      <p className='summary'></p>
      <p className='description'></p>
      <p className='location'></p>
      <p className='startTime'></p>
      <p className='endTime'></p>
    </div>;
  }
}

export default Event