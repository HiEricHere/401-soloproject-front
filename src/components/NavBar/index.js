import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LOG_OUT } from '../../store/actions/userActions';

class NavBar extends React.Component {
  handleLogOutButton = () => {
    this.props.logOut();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Nav Bar</h2>
        <button type='button' onClick={this.handleLogOutButton}>Log Out</button>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(LOG_OUT()) };
};

NavBar.propTypes = {
  logOut: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(NavBar);
