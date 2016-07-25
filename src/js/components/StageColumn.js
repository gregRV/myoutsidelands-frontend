import './StageColumn.scss';

import React, { Component, PropTypes } from 'react';
import Event from './Event';

export default class StageColumn extends Component {
  render() {
    const { name, events } = this.props;
    const eventsToRender = events.map((ev, i) => {
      return <Event key={ev.name} event={ev} isFirstArtistOfTheDay={i === 0} />;
    });

    return (
      <div className="stage-column">
        <p className="stage-name">{ name }</p>
        {eventsToRender}
      </div>
    );
  }
}
