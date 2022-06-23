import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";

const TodoItem = (props) => {
    const { todo, removeTodo, completeTodo } = props;

    return (
        <div className={todo.completeted ? "todo-row complete" : "todo-row"}>
            {todo.text}
            <div className="iconsContainer">
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