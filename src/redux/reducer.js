import { LOGIN, LOGOUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_TODOS } from './actionTypes';

const initialState = {
  isAuthenticated: false,
  user: null,
  todos: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false, user: null, todos: [] }; // Clear tasks on logout
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo
        ),
      };
    case CLEAR_TODOS:
      return { ...state, todos: [] };
    default:
      return state;
  }
};

export default reducer;
