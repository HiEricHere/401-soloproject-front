import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signIn } from '../../../store/actions/userActions';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitSignIn(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Sign In</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='username'
            name='username'
            onChange={this.handleChange}
          />
          <input
            type='text'
            placeholder='password'
            name='password'
            onChange={this.handleChange}
          />
          <button type='submit'>Log In</button>
          { !this.props.status ? <p>{this.props.notification}</p> : null }
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.signInReducer.status,
    notification: state.signInReducer.notification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { submitSignIn: (credentials) => dispatch(signIn(credentials)) };
};

SignIn.propTypes = {
  submitSignIn: PropTypes.func,
  status: PropTypes.bool,
  notification: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
