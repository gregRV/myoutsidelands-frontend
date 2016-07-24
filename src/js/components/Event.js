import React, { Component, PropTypes } from 'react';
import star from '../../images/star.svg';

export default class Event extends Component {
  render() {
    const {event} = this.props;
    const style = {

    }

    return <div style={style}>
      <img src={star} />
      <p>{event.name}</p>
      <p>{event.time.start} - {event.time.end}</p>
    </div>;
  }
}
