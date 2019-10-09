import superagent from 'superagent';

const URL = process.env.REACT_APP_URL;

const GET_TODOS = (todolist) => {
  return {
    type: 'GET_TODOS',
    payload: todolist,
  };
};

const CREATE_TODO = (newTodo) => {
  return {
    type: 'CREATE_TODO',
    payload: newTodo,
  };
};

const EDIT_TODO = (editedTodo) => {
  return {
    type: 'EDIT_TODO',
    payload: editedTodo,
  };
};

const DELETE_TODO = (deletedTodo) => {
  return {
    type: 'DELETE_TODO',
    payload: deletedTodo,
  };
};

export const getTodos = (userID) => {
  return (dispatch) => {
    return superagent
      .get(`${URL}/todo/${userID}`)
      .then((response) => {
        dispatch(GET_TODOS(response.body));
      });
  };
};

export const createTodo = (data) => {
  return (dispatch) => {
    return superagent
      .post(`${URL}/todo/${data.userID}`)
      .send(data)
      .then((response) => {
        dispatch(CREATE_TODO(response.body));
      });
  };
};

export const editTodo = (data) => {
  return (dispatch) => {
    return superagent
      .put(`${URL}/todo/${data.userID}`)
      .query({ id: data.todoID })
      .send({ todo: data.todo })
      .then((response) => {
        dispatch(EDIT_TODO(response.body));
      });
  };
};

export const deleteTodo = (data) => {
  return (dispatch) => {
    return superagent
      .delete(`${URL}/todo/${data.userID}`)
      .query({ id: data.todoID })
      .then((response) => {
        dispatch(DELETE_TODO(response.body));
      });
  };
};
