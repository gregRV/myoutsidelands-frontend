import React, { Component, PropTypes } from 'react';

export default class TimeColumn extends Component {
  static propTypes = {
    times: PropTypes.array.isRequired
  };

  render() {
    const {times} = this.props;

    return <div>
      <p>Time Column</p>
    </div>;
  }
}
