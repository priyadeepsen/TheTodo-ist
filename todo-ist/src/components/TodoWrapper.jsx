import React, { useState } from 'react';
import TodoForm from './TodoForm';
import {v4 as uuidv4} from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo'; 


function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    // Add Todo
    const addTodo = (todo) => {
        setTodos([
            ...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false},
        ]);
    }

    // Delete Todo
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    // Toggle Complete Todo
    const toggleComplete = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? { ...todo, completed:!todo.completed} : todo)
        )
    }

    // Edit Todo
    const editTodo = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo)
        )
    }

    // Edit Task Todo
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo)
        )
    }

    // console.log("todos", todos)
  return (
    <div className="TodoWrapper">
        <h1>Web Development Tasks!</h1>
        <TodoForm addTodo={addTodo}/>

        {/* Display Todos */}
        {todos.map((todo)=> todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
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
  )
}

export default TodoWrapper