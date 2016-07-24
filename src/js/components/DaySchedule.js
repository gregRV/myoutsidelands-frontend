import React, { Component, PropTypes } from 'react';
import TimeColumn from './TimeColumn';
import StageColumn from './StageColumn';

export default class DaySchedule extends Component {
  static propTypes = {
    day: PropTypes.string.isRequired,
    schedule: PropTypes.array.isRequired
  };

  render() {
    const {day, schedule} = this.props;

    return <div>
      <h1>{day}</h1>
      <p>{JSON.stringify(schedule)}</p>
      <TimeColumn />
      <StageColumn />
    </div>;
  }
}
