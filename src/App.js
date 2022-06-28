import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;

    if(todos.length > 0) {
      id = todos[0].id + 1;
    }

    let todo = {id: id, text: text, completed: false, import: false}
    let newTodos = [todo, ...todos];

    setTodos(newTodos);
  }
  
  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })

    setTodos(updatedTodos);
  }

  const importantTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if(todo.id === id) {
        todo.important = !todo.important
      }
      return todo
    })

    setTodos(updatedTodos)
  }
  
  let sortedTodos = todos.sort((a, b) => b.important - a.important)

  return (
    <div className="todo-app">
      <h1>Todo List for training program</h1>
      <TodoForm addTodo={addTodo}/>
      {sortedTodos.map((todo) => {
        return (
          <TodoItem 
            removeTodo={removeTodo} 
            todo={todo} 
            key={todo.id}
            completeTodo={completeTodo}
            importantTodo={importantTodo}
          />
        )
      })}
    </div>
  );
}

export default App;
