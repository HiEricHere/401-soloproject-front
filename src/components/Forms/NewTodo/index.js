import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createTodo } from '../../../store/actions/todoActions';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.id,
      todo: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.todo}
          name='todo'
          onChange={this.handleChange}
        />
        <button type='submit'>Make todo</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { id: state.userReducer.user.id };
};

const mapDispatchToProps = (dispatch) => {
  return { createTodo: (data) => dispatch(createTodo(data)) };
};

NewTodo.propTypes = {
  id: PropTypes.string,
  createTodo: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo);
