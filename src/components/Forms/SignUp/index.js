import React from 'react';
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
        <button type="reset" onClick={this.handleClear}>Clear</button>
      </form>
    );
  }
}

const mapDispatchToState = (dispatch) => {
  return { submitSignUp: (userData) => dispatch(signUp(userData)) };
};

export default connect(null, mapDispatchToState)(SignUpForm);
