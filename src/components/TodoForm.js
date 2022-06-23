import React, {
    useState
} from "react";

export default function TodoForm(props) {
    
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(input);
        setInput('');
    }

    return ( 
        <form onSubmit={handleSubmit} className ="todo-form">
        <input 
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
        placeholder="Add some exercise" 
        />
        <button type="submit" className="todo-button">Add Todo</button> 
        </form>
    )
}