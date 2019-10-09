import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editTodo } from '../../../store/actions/todoActions';

class EditTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.userID,
      todoID: this.props.itemID,
      todo: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleEdit = (event) => {
    event.preventDefault();
    this.props.editTodo(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleEdit}>
        <input
          type='text'
          name='todo'
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <button type='submit'>Edit</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { editTodo: (data) => dispatch(editTodo(data)) };
};

EditTodo.propTypes = {
  editTodo: PropTypes.func,
  userID: PropTypes.string,
  itemID: PropTypes.string,
  edit: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(EditTodo);
