import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTodos } from '../../store/actions/todoActions';
import Todo from '../../components/Todo';
import NewTodo from '../../components/Forms/NewTodo';
import EditTodo from '../../components/Forms/EditTodo';
import TodoDeleteButton from '../../components/Button/TodoDeleteButton/TodoDeleteButton';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.getTodos(this.props.id);
  }

  render() {
    return ( // delete: itemID, userID
      <section className='todoList'>
        <h3>Todo List Component</h3>
        <ul>
          {
            this.props.todoList.map((item, idx) => {
              return <li key={idx}>
                        <Todo item={item}/>
                        <EditTodo itemID={item._id} userID={item.userID} />
                        <TodoDeleteButton itemID={item._id} userID={item.userID}/>
                      </li>;
            })
          }
        </ul>
        <h3>Add Todo</h3>
        <NewTodo/>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return { 
    id: state.userReducer.user.id,
    todoList: state.todoReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTodos: (userID) => dispatch(getTodos(userID)),
  };
};

TodoList.propTypes = {
  id: PropTypes.string,
  getTodos: PropTypes.func,
  todoList: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
