import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, markAsDone, clearTodos } from '../redux/actionCreators'; // Import the new action
import TodoItem from './TodoItem';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [editId, setEditId] = useState(null);
  const [selectedTasks, setSelectedTasks] = useState([]); // Track selected tasks
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task) {
      if (editId !== null) {
        dispatch(updateTodo({ id: editId, task, date: new Date().toLocaleString() }));
        setEditId(null);
      } else {
        dispatch(addTodo({ id: Date.now(), task, date: new Date().toLocaleString(), isDone: false }));
      }
      setTask('');
    }
  };

  const handleClearSelected = () => {
    selectedTasks.forEach((id) => {
      dispatch(deleteTodo(id)); // Delete only the selected tasks
    });

    // Clear the input if any selected task was the one being edited
    if (selectedTasks.includes(editId)) {
      setTask(''); // Clear input
      setEditId(null); // Clear the editId as we no longer have the task to update
    }

    setSelectedTasks([]); // Clear selection after deletion
  };

  const handleClearAll = () => {
    dispatch(clearTodos()); // Dispatch the action to clear all tasks
  };

  const handleSelectTask = (id) => {
    setSelectedTasks((prevSelected) => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter((taskId) => taskId !== id); // Deselect task
      } else {
        return [...prevSelected, id]; // Select task
      }
    });
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setTask(todo.task);
  };

  const handleMarkAsDone = (id) => {
    dispatch(markAsDone(id)); // Dispatch the action to mark the task as done
  };

  return (
    <div className="todo-container">
      <h1 className="todo-header">Task List</h1>

      <div className="todo-form">
        <input
          type="text"
          className="todo-input"
          placeholder="New task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="todo-btn" onClick={handleAdd}>
          {editId !== null ? 'Update' : 'Add'}
        </button>
      </div>

      <table className="todo-table">
        <tbody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onEdit={handleEdit}
              onSelect={handleSelectTask}  // Add the onSelect prop to TodoItem
              isSelected={selectedTasks.includes(todo.id)}  // Pass whether the task is selected
              onMarkAsDone={handleMarkAsDone}  // Add the onMarkAsDone function
            />
          ))}
        </tbody>
      </table>

      {/* Buttons Container */}
      <div className="button-container">
        {selectedTasks.length > 0 && (
          <button className="clear-all-btn" onClick={handleClearSelected}>
            Clear Selected
          </button>
        )}

        {/* Only show the "Clear All Tasks" button when there are tasks */}
        {todos.length > 0 && (
          <button className="clear-all-btn" onClick={handleClearAll}>
            Clear All Tasks
          </button>
        )}
      </div>

    </div>
  );
};

export default TodoList;