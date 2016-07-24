import './Event.scss';

import React, { Component, PropTypes } from 'react';
import heart from '../../images/heart.svg';
import star from '../../images/star.svg';

export default class Event extends Component {
  render() {
    const {event} = this.props;
    const recommendedStyle = {
      backgroundColor: '#0F2043',
      color: '#FFF',
      padding: '10px',
      margin: '1px'
    }
    const likedStyle = {
      backgroundColor: '#EF3B46',
      color: '#FFF',
      padding: '10px',
      margin: '1px'
    }
    const style = event.tag === 'recommended' ? recommendedStyle : likedStyle;
    const icon = event.tag === 'recommended' ? star : heart;

    return <div style={style}>
      <img src={icon} />
      <p>{event.name.toUpperCase()}</p>
      <p>{event.time.start} - {event.time.end}</p>
    </div>;
  }
}
