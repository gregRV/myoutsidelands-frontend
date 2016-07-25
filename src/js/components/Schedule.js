import './Schedule.scss';

import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import scrollToElement from 'scroll-to-element';
import DaySchedule from './DaySchedule';

import legend from '../../images/legend.png';

export default class Schedule extends Component {
  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  onLinkClick (e) {
    e.preventDefault();
    scrollToElement(e.target.hash)
  }

  render () {
    const { schedule } = this.props;
    const groupedSchedules = _.groupBy(schedule, 'day');
    const friday = 'Friday, August 5';
    const saturday = 'Saturday, August 6';
    const sunday = 'Sunday, August 7';

    return (
      <div className="schedule-container">
        <div className="m-b-2">
          <a className="m-a-1" href='#friday' onClick={this.onLinkClick}>{friday}</a>
          <a className="m-a-1" href='#saturday' onClick={this.onLinkClick}>{saturday}</a>
          <a className="m-a-1" href='#sunday' onClick={this.onLinkClick}>{sunday}</a>
        </div>
        <img className="legend m-b-1" src={legend} alt="legend"/>
        <div id="friday">
          <DaySchedule day={friday} schedule={groupedSchedules['2016-08-05']}/>
        </div>
        <div id="saturday">
          <DaySchedule day={saturday} schedule={groupedSchedules['2016-08-06']}/>
        </div>
        <div id="sunday">
          <DaySchedule day={sunday} schedule={groupedSchedules['2016-08-07']}/>
        </div>
      </div>
    );
  }
}
