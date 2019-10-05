import React from 'react';
// import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import SignIn from '../../components/Forms/SignIn';
import SignUp from '../../components/Forms/SignUp';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <SignIn/>
        <SignUp/>
      </React.Fragment>
    );
  }
}

export default App;
// const mapPropsToState = (state) => {
//   return { userStatus: state.userReducer.activeUser }
// }

// export default connect(mapPropsToState)(App);
