const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS':
      return [...action.payload];
    case 'CREATE_TODO':
      return [...state, action.payload];
    case 'EDIT_TODO':
      return state.map((todo) => {
        return todo._id === action.payload._id ? action.payload : todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => {
        return todo._id !== action.payload._id;
      });
    default:
      return state;
  }
};

export default todoReducer;
