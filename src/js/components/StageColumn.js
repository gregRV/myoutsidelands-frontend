import './StageColumn.scss';

import React, { Component, PropTypes } from 'react';
import Event from './Event';

export default class StageColumn extends Component {
  render() {
    const { name, events } = this.props;
    const eventsToRender = events.map((ev) => {
      return <Event event={ev} />;
    });

    return (
      <div className="stage-column">
        <p>{ name }</p>
        {eventsToRender}
      </div>
    );
  }
}
