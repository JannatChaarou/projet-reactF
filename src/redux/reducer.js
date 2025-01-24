import { LOGIN, LOGOUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_TODOS, MARK_AS_DONE } from './actionTypes';

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
      return { ...state, isAuthenticated: false, user: null, todos: [] };
    case ADD_TODO:
      return { 
        ...state, 
        todos: [...state.todos, { ...action.payload, isDone: false }] 
      };
    case DELETE_TODO:
      return { 
        ...state, 
        todos: state.todos.filter((todo) => todo.id !== action.payload) 
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, task: action.payload.task } : todo
        ),
      };
    case CLEAR_TODOS:
      return { ...state, todos: [] }; // Clear all tasks
    case MARK_AS_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isDone: !todo.isDone }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default reducer;
