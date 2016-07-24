import React, { Component, PropTypes } from 'react';

export default class Event extends Component {
  render() {
    const {event} = this.props;

    return <div style={{border: 'solid red 1px'}}>
      <p>*</p>
      <p>{event.name}</p>
      <p>{event.time.start} - {event.time.end}</p>
    </div>;
  }
}
