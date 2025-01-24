import { LOGIN, LOGOUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_TODOS, MARK_AS_DONE} from './actionTypes';

export const login = (username) => ({ type: LOGIN, payload: username });
export const logout = () => ({ type: LOGOUT });
export const deleteTodo = (id) => ({type: DELETE_TODO, payload: id});
export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    ...todo,
    date: new Date().toLocaleString(), // Add the date when the task is added
  },
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});

export const markAsDone = (id) => ({
  type: MARK_AS_DONE,
  payload: id,
});

export const clearTodos = () => ({
  type: CLEAR_TODOS,
});

