import React from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Home from '../Home';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
            <Home/>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;

// const mapPropsToState = (state) => {
//   return { userStatus: state.userReducer.activeUser }
// }

// export default connect(mapPropsToState)(App);
