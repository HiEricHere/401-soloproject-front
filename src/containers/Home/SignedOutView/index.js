import React from 'react';
import SignIn from '../../../components/Forms/SignIn';
import SignUp from '../../../components/Forms/SignUp';

class SignedOutView extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SignIn/>
        <SignUp/>
      </React.Fragment>
    );
  }
}

export default SignedOutView;
