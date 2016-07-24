import React, { Component, PropTypes } from 'react';

export default class TimeColumn extends Component {
  // static propTypes = {
  //   times: PropTypes.array.isRequired
  // };

  render() {
    // const {times} = this.props;
    // for each hour
      // return a list of that hour joined with elements from Minute list
    const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
    const minutes = ['00', '15', '30', '45']
    const times = _.flatten(hours.map((hour) => {
      return minutes.map((min) => {
        return `${hour}:${min}`;
      });
    }));
    console.log('times:', times);
    const timesToRender = times.map((ts, i) => {
      return <li key={i}>{ts}</li>;
    });

    return <div>
      <h1>Times</h1>
      <ul>
        {timesToRender}
      </ul>
    </div>;
  }
}
