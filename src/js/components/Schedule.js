import './Schedule.scss';

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import DaySchedule from './DaySchedule';

import legend from '../../images/legend.png';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render() {
    const { schedule } = this.props;
    const groupedSchedules = _.groupBy(schedule, 'day');
    const friday = 'Friday, August 5';
    const saturday = 'Saturday, August 6';
    const sunday = 'Sunday, August 7';

    return (
      <div className="schedule-container">
        <div className="m-b-2">
          <a className="m-a-1" href='#'>{friday}</a>
          <a className="m-a-1" href='#'>{saturday}</a>
          <a className="m-a-1" href='#'>{sunday}</a>
        </div>
        <img className="legend m-b-1" src={legend} alt="legend"/>
        <DaySchedule day={friday} schedule={groupedSchedules['2016-08-05']}/>
        <DaySchedule day={saturday} schedule={groupedSchedules['2016-08-06']}/>
        <DaySchedule day={sunday} schedule={groupedSchedules['2016-08-07']}/>
      </div>
    );
  }
}
