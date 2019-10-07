import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignedOutView from './SignedOutView';
import SignedInView from './SignedInView';
import { SIGN_OUT } from '../../store/actions/userActions';
import authCheck from '../../middlehelpers/auth-user';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: false,
    };
  }

  componentDidUpdate(prevState) {
    if (prevState.id !== this.props.id) {
      this.setState({ activeUser: authCheck(this.props.id) });
    }
  }

  render() {
    const authView = this.state.activeUser ? <SignedInView/> : <SignedOutView/>;
    return (
      <React.Fragment>
        { authView }
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.userReducer.user.id };
};

const mapDispatchToProps = (dispatch) => {
  return { SIGN_OUT: () => { dispatch(SIGN_OUT()); } };
};

Home.propTypes = {
  id: PropTypes.string,
  // authCheck: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default connect(mapStateToProps)(Home);
