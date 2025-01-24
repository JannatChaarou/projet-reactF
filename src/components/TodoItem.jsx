import React from 'react';

const TodoItem = ({ todo, onEdit, onSelect, isSelected, onMarkAsDone }) => {
  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(todo.id)}  // Toggle selection when clicked
        />
      </td>
      <td   style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}><p className='text'>
        {todo.task}</p>
      </td>
      <td ><p className='text'>{todo.date}</p></td> {/* Display the date */}
      <td>
        <button className="edit-btn" onClick={() => onEdit(todo)}>Edit</button>
      </td>
      <td>
        <button className="done-btn" onClick={() => onMarkAsDone(todo.id)}>
          ✔ {/* Checkmark icon for marking as done */}
        </button>
      </td>
    </tr>
  );
};

export default TodoItem; 