import './AppContainer.scss';
import yellowDenimBackground from '../../../images/yellow-yellower.jpg';
import redDenimBackground from '../../../images/red-denim.jpg';
import headerImg from '../../../images/header-img.png';
import spotifyLogo from '../../../images/spotifyLogo-BLACK.svg';
import connectNowButton from '../../../images/connectNow-btn.png';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { getSchedule } from '../../reducers';

export class AppContainer extends Component {

  static propTypes = {
    schedule: PropTypes.array.isRequired
  };

  render () {
    return (
      <div className="app-container" style={{ backgroundImage: `url(${yellowDenimBackground})` }}>
        <header className="text-sm-center" style={{ backgroundImage: `url(${redDenimBackground})` }}>
          <img className="main-logo" src={headerImg} alt="main logo"/>
        </header>
        <img className="spotify-logo m-t-3 m-b-2" src={spotifyLogo} alt="spotify logo"/>
        <p className="app-instructions">Link your Spotify accout to auto-generate a lineup schedule.</p>
        <img className="connect-now-button m-t-2" src={connectNowButton} alt="connect now button"/>
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
