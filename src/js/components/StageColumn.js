import React, { Component, PropTypes } from 'react';
import Event from './Event';

export default class StageColumn extends Component {
  render() {
    const eventsToRender = events.map((ev) => {
      return <Event event={ev} />;
    });

    return <div>
      <p>Stage Column</p>
      {eventsToRender}
    </div>;
  }
}
