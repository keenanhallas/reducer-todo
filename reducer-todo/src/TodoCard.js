import React from "react";

const TodoCard = (todo) => {
    console.log(todo.item);
    return(
        <div style={{border: "1px solid black", width: "75%"}}>
            <h3>{todo.item}</h3>
            <button>Mark complete</button>
        </div>
    );
}

export default TodoCard;