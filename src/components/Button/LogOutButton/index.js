import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SIGN_OUT } from '../../../store/actions/userActions';

class LogOutButton extends React.Component {
  handleLogOutButton = () => {
    this.props.logOut();
  }

  render() {
    return (
      <button type='button' onClick={this.handleLogOutButton}>Log Out</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { 
    logOut: () => {
      dispatch(SIGN_OUT());
      localStorage.removeItem('funPass');
    },
  };
};

LogOutButton.propTypes = {
  logOut: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(LogOutButton);
