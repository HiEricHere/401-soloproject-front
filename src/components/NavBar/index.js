import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SIGN_OUT } from '../../store/actions/userActions';

class NavBar extends React.Component {
  handleLogOutButton = () => {
    this.props.logOut();
  }

  render() {
    return (
      <React.Fragment>
        <h2>Nav Bar</h2>
        <li>placeholder1</li>
        <li>placeholder2</li>
        <li><button type='button' onClick={this.handleLogOutButton}>Log Out</button></li>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { logOut: () => dispatch(SIGN_OUT()) };
};

NavBar.propTypes = {
  logOut: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(NavBar);
