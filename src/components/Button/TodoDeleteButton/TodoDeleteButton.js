import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTodo } from '../../../store/actions/todoActions';

class TodoDeleteButton extends React.Component {
  handleDelete = () => {
    this.props.deleteTodo({ userID: this.props.userID, todoID: this.props.itemID });
  }

  render() {
    return (
      <button onClick={this.handleDelete}>Done!</button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { deleteTodo: (data) => dispatch(deleteTodo(data)) };
};

TodoDeleteButton.propTypes = {
  deleteTodo: PropTypes.func,
  userID: PropTypes.string,
  itemID: PropTypes.string,
};

export default connect(null, mapDispatchToProps)(TodoDeleteButton);
