import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const TodoItem = (props) => {
    const { todo, removeTodo } = props;

    return (
        <div className="todo-row">
            {props.todo.text}
            <div className="iconsContainer">
                <RiCloseCircleLine 
                    className="icon"
                    onClick={() => removeTodo(todo.id)}
                />
            </div>
        </div>
    )
}
export default TodoItem;