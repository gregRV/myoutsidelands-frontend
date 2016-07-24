import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import DaySchedule from './DaySchedule';
import TimeColumn from './TimeColumn';
import StageColumn from './StageColumn';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render() {
    const { schedule } = this.props;
    const groupedSchedules = _.groupBy(schedule, 'day');

    return <div>
      <h1>Schedule</h1>
      <div>
        <a href='#'>Friday</a>
        <a href='#'>Saturday</a>
        <a href='#'>Sunday</a>
      </div>
      <TimeColumn times={[]} />
      <StageColumn />
      <DaySchedule day={'Friday'} schedule={groupedSchedules['2016-08-05']}/>
      <DaySchedule day={'Saturday'} schedule={groupedSchedules['2016-08-06']}/>
      <DaySchedule day={'Sunday'} schedule={groupedSchedules['2016-08-07']}/>
    </div>;
  }
}
