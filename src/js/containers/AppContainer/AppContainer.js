import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getSchedule } from '../../reducers';

export class AppContainer extends Component {

  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render () {
    return (
      <div>
        <h1>Splash Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: getSchedule(state)
  };
}

export default connect(
  mapStateToProps
)(AppContainer);
