import React, { Component, PropTypes } from 'react';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render() {
    const { schedule } = this.props;
    console.log('schedule', schedule);

    return (
      <h1>{schedule.length}</h1>
    );
  }
}
