import './Event.scss';

import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import heart from '../../images/heart.svg';
import star from '../../images/star.svg';

export default class Event extends Component {
  render() {
    const { event: { name, time, tag }, isFirstArtistOfTheDay } = this.props;
    const recommendedStyle = {
      backgroundColor: '#0F2043',
      color: '#FFF',
    };
    const likedStyle = {
      backgroundColor: '#EF3B46',
      color: '#FFF',
    };
    const nullStyle = {
      backgroundColor: '#D9770B',
      color: '#F9A722',
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

    const startHour = time.start.toString().substring(0, 2);
    const startMinutes = time.start.toString().substring(2, 4);
    const startMoment = moment(`${startHour}:${startMinutes}`, 'HH:mm');
    const endHour = time.end.toString().substring(0, 2);
    const endMinutes = time.end.toString().substring(2, 4);
    const endMoment = moment(`${endHour}:${endMinutes}`, 'HH:mm');
    const startOfDayMoment = moment('12:00', 'HH:mm');
    const minutesOffset = startMoment.diff(startOfDayMoment, 'minutes');
    const height = endMoment.diff(startMoment, 'minutes');

    style.height = `${height * 2}px`;
    style.position = 'absolute';
    style.top = `${minutesOffset * 2 + 50}px`;
    style.overflow = 'hidden';
    style.width = '180px';
    style.paddingTop = '10px';
    style.border = '1px solid';

    let fontSize = '12px';

    if (name.length > 90) {
      fontSize = '8px';
    } else if (name.length > 40) {
      fontSize = '11px';
    }

    return (
      <div style={style}>
        <img src={icon} />
        <p style={{ fontSize }}>{name.toUpperCase()}</p>
        <p>{startMoment.format('h:mm')} - {endMoment.format('h:mm')}</p>
      </div>
    );
  }
}
