import './TimeColumn.scss';

import React, { Component, PropTypes } from 'react';

export default class TimeColumn extends Component {

  render() {
    const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const minutes = ['00', '15', '30', '45'];
    const times = _.flatten(hours.map((hour) => {
      return minutes.map((min) => {
        return `${hour}:${min}`;
      });
    }));

    times.push('10:00');

    const timesToRender = times.map((ts, i) => {
      return <li key={i}>{ts}</li>;
    });

    return (
      <ul className="time-column list-unstyled">
        {timesToRender}
      </ul>
    );
  }
}
