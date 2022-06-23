import { useState } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";


function App() {
  const [todos,setTodos] = useState([]);

  const addTodo = (text) => {
    let id = 1;
  }
  return (
    <div className="todo-app">
      <h1>Todo List for training program</h1>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
