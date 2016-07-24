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
      <DaySchedule day={'Friday'} schedule={schedule[0]}/>
      <DaySchedule day={'Saturday'} schedule={schedule[1]}/>
      <DaySchedule day={'Sunday'} schedule={schedule[2]}/>
    </div>;
  }
}
