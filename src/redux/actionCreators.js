import { LOGIN, LOGOUT, ADD_TODO, DELETE_TODO, UPDATE_TODO, CLEAR_TODOS } from './actionTypes';

export const login = (username) => ({ type: LOGIN, payload: username });
export const logout = () => ({ type: LOGOUT });
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });

export const deleteTodo = (id) => ({type: DELETE_TODO,payload: id,});
export const updateTodo = (todo) => ({type: UPDATE_TODO,payload: todo,});
export const clearTodos = () => ({ type: CLEAR_TODOS });