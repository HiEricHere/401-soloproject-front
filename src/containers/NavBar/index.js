import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogOutButton from '../../components/Button/LogOutButton';
import authCheck from '../../middlehelpers/auth-user';

class NavBar extends React.Component {
  render() {
    return (
      <nav>
        <h1>To Do List</h1>
        { authCheck(this.props.id)
          ? <ul>
              <li><Link to='/user'>User</Link></li>
              <li><Link to='/todolist'>To Do</Link></li>
              <li><LogOutButton/></li>
            </ul>
          : <ul>
              <li><Link to='/signin'>Sign In</Link></li>
              <li><Link to='/signup'>Sign Up</Link></li>
            </ul>
        }
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.userReducer.user.id };
};

NavBar.propTypes = {
  id: PropTypes.string,
};

export default connect(mapStateToProps)(NavBar);
