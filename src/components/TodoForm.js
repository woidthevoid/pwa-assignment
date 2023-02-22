import React, {useState, useEffect, useRef} from "react";

function TodoForm(props) {
    const [input,setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const buttonHandler = e => {
        e.preventDefault();
        props.onSubmit({
            id:Math.floor(Math.random() * 1000),
            text:input
        });
        setInput('');
    };



    return (
        <form className="todo-form" onSubmit={buttonHandler}>
            <input type="text" placeholder="New todo"
            value={input} name="text" className="todo-input"
            onChange={handleChange} ref={inputRef}/>
            <button className="todo-submit">Submit</button>
        </form>
    )
}
export default TodoForm;