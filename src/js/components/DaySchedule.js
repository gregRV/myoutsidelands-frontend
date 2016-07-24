import './DaySchedule.scss';

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import goldWavesTop from '../../images/goldwaves-top-dostuff.png';
import goldWavesMiddle from '../../images/goldwaves-inner.png';
import goldWavesBottom from '../../images/goldwaves-bottom.png';

import StageColumn from './StageColumn';
import TimeColumn from './TimeColumn';

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
    const groupedSchedules = _.groupBy(schedule, 'stage');
    const stageNames = [
      'Lands End',
      'Sutro',
      'Twin Peaks',
      'Panhandle',
      'The House by Heineken',
      'The Barbary'
    ];

    return (
      <div className="m-t-3 m-b-3">
        <div className="day-schedule-top" style={dayScheduleTopStyle}></div>
        <div className="day-schedule-middle" style={dayScheduleMiddleStyle}>
          <div className="day-schedule-middle-offset">
            <h1>{day}</h1>
            <div className="columns-container">
              <TimeColumn />
              { stageNames.map((stageName) => <StageColumn ken={stageName} name={stageName} events={groupedSchedules[stageName] || []} />) }
            </div>
          </div>
        </div>
        <div className="day-schedule-bottom" style={dayScheduleBottomStyle}></div>
      </div>
    );
  }
}
