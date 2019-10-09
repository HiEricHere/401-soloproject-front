import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../NavBar';
import SignIn from '../../components/Forms/SignIn';
import SignUp from '../../components/Forms/SignUp';
import UserProfile from '../UserProfile';
import TodoList from '../TodoList';
import authCheck from '../../middlehelpers/auth-user';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          { authCheck(this.props.id)
            ? <React.Fragment>
                <NavBar />
                <Switch>
                  <Route path='/todolist' component={TodoList}/>
                  <Route path='/user' component={UserProfile}/>
                </Switch>
              </React.Fragment>
            : <React.Fragment>
                <NavBar />
                <Switch>
                  <Route path='/signin' component={SignIn}/>
                  <Route path='/signup' component={SignUp}/>
                </Switch>
              </React.Fragment>
          }
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

const mapPropsToState = (state) => {
  return { id: state.userReducer.user.id };
};

App.propTypes = {
  id: PropTypes.string,
};

export default connect(mapPropsToState)(App);
