import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class UserDetails extends React.Component {  
  render() {
    return (
      <h2>Welcome, {`${this.props.username}`}</h2>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.userReducer.user.username,
  };
};

UserDetails.propTypes = {
  username: PropTypes.string,
};

export default connect(mapStateToProps)(UserDetails);
