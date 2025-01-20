import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo, clearTodos } from '../redux/actionCreators';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null); 
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      if (editId !== null) {
        dispatch(updateTodo({ id: editId, task }));
        setEditId(null); 
      } else {
        dispatch(addTodo({ id: Date.now(), task }));
      }
      setTask(''); 
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id)); 
  };

  const handleClearAll = () => {
    dispatch(clearTodos()); 
  };

  const handleEdit = (todo) => {
    setEditId(todo.id); 
    setTask(todo.task); 
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="New task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>
        {editId !== null ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((todo) => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            onDelete={handleDelete} 
            onEdit={handleEdit} 
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <button onClick={handleClearAll} style={{ marginTop: '20px', backgroundColor: 'red', color: 'white' }}>
          Delete all tasks
        </button>
      )}
    </div>
  );
};

export default TodoList;
