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

    return (
      <div className="schedule-container">
        <div className="m-b-2">
          <a className="m-a-1" href='#'>Friday, August 5</a>
          <a className="m-a-1" href='#'>Saturday, August 6</a>
          <a className="m-a-1" href='#'>Sunday, August 7</a>
        </div>
        <img className="legend m-b-1" src={legend} alt="legend"/>
        <DaySchedule day={'Friday'} schedule={groupedSchedules['2016-08-05']}/>
        <DaySchedule day={'Saturday'} schedule={groupedSchedules['2016-08-06']}/>
        <DaySchedule day={'Sunday'} schedule={groupedSchedules['2016-08-07']}/>
      </div>
    );
  }
}
