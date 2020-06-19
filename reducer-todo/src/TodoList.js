import React from "react";
import TodoCard from "../src/TodoCard";

const TodoList = ({ state, dispatch }) => {
    return(
        <div className="todoList" style={{display: "flex", justifyContent: "center"}}>
            <TodoCard name="test"/>
        </div>
    );
}

export default TodoList;