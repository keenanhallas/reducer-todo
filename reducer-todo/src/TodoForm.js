import React, { useState } from "react";

const TodoForm = ({ state, dispatch }) => {
    const [formState, setFormState] = useState("");

    const handleChange = e => {
        setFormState(e.target.value);
        console.log(formState);
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({type: "ADD_TODO", payload: {
            item: formState,
            completed: false,
            id: Date.now()
        }});
        setFormState("");
    }

    const handleClear = e => {
        e.preventDefault();
        dispatch({type: "CLEAR_COMPLETED"});
    }

    return(
        <div className="todoForm">
            <h1>A to-do list!</h1>
            <form>
                <label htmlFor="formState">New to-do: </label>
                <input
                    id="formState"
                    name="formState"
                    value={formState}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClear}>Clear completed</button>
            </form>
        </div>
    );
}

export default TodoForm;