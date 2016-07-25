import './Event.scss';

import React, { Component, PropTypes } from 'react';
import heart from '../../images/heart.svg';
import star from '../../images/star.svg';

export default class Event extends Component {
  render() {
    const { event: { name, time, tag }, isFirstArtistOfTheDay } = this.props;
    const recommendedStyle = {
      backgroundColor: '#0F2043',
      color: '#FFF',
      padding: '10px',
      margin: '1px'
    };
    const likedStyle = {
      backgroundColor: '#EF3B46',
      color: '#FFF',
      padding: '10px',
      margin: '1px'
    };
    const nullStyle = {
      backgroundColor: '#D9770B',
      color: '#F9A722',
      padding: '10px',
      margin: '1px'
    };
    let style;
    let icon;

    if (!tag) {
      style = nullStyle;
      icon = '';
    } else {
      style = tag === 'recommended' ? recommendedStyle : likedStyle;
      icon = tag === 'recommended' ? star : heart;
    }

    return (
      <div style={style}>
        <img src={icon} />
        <p>{name.toUpperCase()}</p>
        <p>{time.start} - {time.end}</p>
      </div>
    );
  }
}
