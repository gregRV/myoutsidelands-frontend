import './AppContainer.scss';
import yellowDenimBackground from '../../../images/yellow-yellower.jpg';
import redDenimBackground from '../../../images/red-denim.jpg';
import headerImg from '../../../images/header-img.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSchedule } from '../../reducers';
import { updateSchedule } from '../../reducers/schedule';

import Schedule from '../../components/Schedule';

export class AppContainer extends Component {

  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render () {
    const { schedule } = this.props;

    return (
      <div className="app-container" style={{ backgroundImage: `url(${yellowDenimBackground})` }}>
        <header className="text-sm-center" style={{ backgroundImage: `url(${redDenimBackground})` }}>
          <img className="main-logo" src={headerImg} alt="main logo"/>
        </header>
        <div className="brown-band"></div>
        <Schedule schedule={schedule} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    schedule: getSchedule(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ updateSchedule }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
