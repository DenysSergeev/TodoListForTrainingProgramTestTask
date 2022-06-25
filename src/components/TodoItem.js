import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";

const TodoItem = (props) => {
    const { todo, removeTodo, completeTodo, importantTodo } = props;

    return (
        <div className={todo.completed ? "todo-row complete" : "todo-row"} style={todo.important ? { background: "red" } : {}}>
            {todo.text}
            <div className="iconsContainer">
                <button onClick={() => importantTodo(todo.id)}
                    className="important-btn">!</button>
                <RiCloseCircleLine 
                    onClick={() => removeTodo(todo.id)}
                    style={{ marginRight: 5 }}
                />
                <BsFillCheckCircleFill onClick={() => completeTodo(todo.id)} />
            </div>
        </div>
    )
}
export default TodoItem;