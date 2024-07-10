import { useState, React } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm'

function TodoWrapper() {

  const [todos, setTodos] = useState([]);

  //Add Todo
  const addTodo = (todo) => {
    setTodos([
      ...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  //Delete todo
  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id != id))

  console.log("todos", todos);
  return (
    <div className='Todowrapper'>
      <h1>web dev task!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => todo.isEditing ? (
        <EditTodoForm />
      ) : (
        <Todo
          key={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
        // editTodo = {editTodo}
        // toggleComplete = {toggleComplete}
        />
      )
      )}
    </div>
  )
}

export default TodoWrapper