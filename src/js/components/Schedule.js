import React, { Component, PropTypes } from 'react';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render() {
    const { schedule } = this.props;

    return (
      <h1>{JSON.stringify(schedule)}</h1>
    );
  }
}
