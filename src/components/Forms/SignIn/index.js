import React from 'react';

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
    console.log(this.state);
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
        </form>
      </React.Fragment>
    );
  }
}

export default SignIn;
