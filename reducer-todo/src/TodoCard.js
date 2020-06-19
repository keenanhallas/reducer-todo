import React from "react";

const TodoCard = ({todo, state, dispatch}) => {
    
    const markComplete = () => {
        dispatch({type: "TOGGLE_COMPLETED", payload: todo});
    }

    return(
        <div style={{border: "1px solid black", width: "75%"}}>
            <h3 style={todo.completed ? {textDecoration: "line-through"} : null}>{todo.item}</h3>
            <button onClick={markComplete}>{todo.completed ? "Mark incomplete" : "Mark complete"}</button>
        </div>
    );
}

export default TodoCard;