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
    const token = localStorage.getItem('funPass') || '';
    return superagent
      .get(`${URL}/todo/${userID}`)
      .set({ authorization: `Bearer ${token}` })
      .then((response) => {
        dispatch(GET_TODOS(response.body));
      });
  };
};

export const createTodo = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem('funPass') || '';
    return superagent
      .post(`${URL}/todo/${data.userID}`)
      .set({ authorization: `Bearer ${token}` })
      .send(data)
      .then((response) => {
        dispatch(CREATE_TODO(response.body));
      });
  };
};

export const editTodo = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem('funPass') || '';
    return superagent
      .put(`${URL}/todo/${data.userID}`)
      .set({ authorization: `Bearer ${token}` })
      .query({ id: data.todoID })
      .send({ todo: data.todo })
      .then((response) => {
        dispatch(EDIT_TODO(response.body));
      });
  };
};

export const deleteTodo = (data) => {
  return (dispatch) => {
    const token = localStorage.getItem('funPass') || '';
    return superagent
      .delete(`${URL}/todo/${data.userID}`)
      .set({ authorization: `Bearer ${token}` })
      .query({ id: data.todoID })
      .then((response) => {
        dispatch(DELETE_TODO(response.body));
      });
  };
};
