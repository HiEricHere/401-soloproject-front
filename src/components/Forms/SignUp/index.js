import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signUp } from '../../../store/actions/userActions';

class SignUpForm extends React.Component {
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

  handleClear = () => {
    this.setState({ username: '', password: '' });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitSignUp(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <h3>Sign Up</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='username'
            placeholder='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='password'
            placeholder='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
          { this.props.status !== null ? <p>{this.props.notification}</p> : null }
          <button type="reset" onClick={this.handleClear}>Clear</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.signUpReducer.success,
    notification: state.signUpReducer.notification,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { submitSignUp: (userData) => dispatch(signUp(userData)) };
};

SignUpForm.propTypes = {
  submitSignUp: PropTypes.func,
  status: PropTypes.bool,
  notification: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
