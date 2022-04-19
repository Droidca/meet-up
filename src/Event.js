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

    const { event } = this.props;
    const { collapsed } = this.state;

    return (

      <div className='event'>
        <h1 className='summary'>{event.summary}</h1>
        <p className='location'>{event.location}</p>
        <p className='start_end_time'>Start: {event.start.dateTime} | End: {event.end.dateTime} </p>
        <button className='show_hide_button' onClick={this.handleDetailsClicked}>{collapsed ? 'show Details' : 'Hide Details'}</button>

        {!collapsed && (
          <div className="event__Details">
            <p className='description'>{event.description}</p>
          </div>
        )}

      </div>

    );
  }
}

export default Event