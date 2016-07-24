import './DaySchedule.scss';

import React, { Component, PropTypes } from 'react';

import goldWavesTop from '../../images/goldwaves-top-dostuff.png';
import goldWavesMiddle from '../../images/goldwaves-inner.png';
import goldWavesBottom from '../../images/goldwaves-bottom.png';

export default class DaySchedule extends Component {
  static propTypes = {
    day: PropTypes.string.isRequired,
    schedule: PropTypes.array.isRequired
  };

  render() {
    const {day, schedule} = this.props;
    const dayScheduleTopStyle = {
      backgroundImage: `url(${goldWavesTop})`,
      backgroundRepeat: 'repeat-x'
    };
    const dayScheduleMiddleStyle = {
      backgroundImage: `url(${goldWavesMiddle})`
    };
    const dayScheduleBottomStyle = {
      backgroundImage: `url(${goldWavesBottom})`,
      backgroundRepeat: 'repeat-x'
    };

    return (
      <div className="m-t-3 m-b-3">
        <div className="day-schedule-top" style={dayScheduleTopStyle}></div>
        <div className="day-schedule-middle" style={dayScheduleMiddleStyle}>
          <div className="day-schedule-middle-offset">
            <h1>{day}</h1>
            <p className="m-b-0">{JSON.stringify(schedule)}</p>
          </div>
        </div>
        <div className="day-schedule-bottom" style={dayScheduleBottomStyle}></div>
      </div>
    );
  }
}
