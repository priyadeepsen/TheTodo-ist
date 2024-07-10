import React, { useState, useCallback } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo';

function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const updateTodos = (updateFn) => {
    setTodos((prevTodos) => prevTodos.map(updateFn));
  };

  const addTodo = useCallback((todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ]);
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  const toggleComplete = useCallback((id) => {
    updateTodos((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
  }, []);

  const editTodo = useCallback((id) => {
    updateTodos((todo) => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo);
  }, []);

  const editTask = useCallback((task, id) => {
    updateTodos((todo) => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo);
  }, []);

  return (
    <div className="TodoWrapper">
      <h1>Web Development Tasks!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
}

export default TodoWrapper;
