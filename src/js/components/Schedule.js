import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import DaySchedule from './DaySchedule';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render() {
    const { schedule } = this.props;
    const groupedSchedules = _.groupBy(schedule, 'day');
    console.log('groupedSchedules:', groupedSchedules);

    return <div>
      <h1>Schedule</h1>
      <div>
        <a href='#'>Friday</a>
        <a href='#'>Saturday</a>
        <a href='#'>Sunday</a>
      </div>
      <DaySchedule day={'Friday'} schedule={schedule[0]}/>
      <DaySchedule day={'Saturday'} schedule={schedule[1]}/>
      <DaySchedule day={'Sunday'} schedule={schedule[2]}/>
    </div>;
  }
}
