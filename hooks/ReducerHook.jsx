import React, { useReducer, useState } from 'react';

// 1. Define the reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          done: false,
        },
      ];
    case 'toggle':
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    case 'delete':
      return state.filter((todo) => todo.id !== action.payload);
    case 'clear':
      return [];
    default:
      return state;
  }
}

// 2. Initial state
const initialTodos = [];

function ReducerHook() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);
  const [text, setText] = useState('');

  const handleAdd = () => {
    if (text.trim() === '') return;
    dispatch({ type: 'add', payload: text });
    setText('');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: 400 }}>
      <h2>📝 Todo List</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter a task"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ margin: '0.5rem 0' }}>
            <span
              onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer',
              }}
            >
              {todo.text}
            </span>
            <button
              style={{ marginLeft: 10 }}
              onClick={() => dispatch({ type: 'delete', payload: todo.id })}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={() => dispatch({ type: 'clear' })}>Clear All</button>
      )}
    </div>
  );
}

export default ReducerHook;
