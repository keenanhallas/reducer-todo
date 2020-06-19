import React from "react";
import TodoCard from "../src/TodoCard";

const TodoList = ({ state, dispatch }) => {
    console.log(state);
    return(
        <div className="todoList" style={{display: "flex", justifyContent: "center"}}>
            {state.todos.map((todo, i) => {
                return <TodoCard key={i} todo={todo}/>
            })}
        </div>
    );
}

export default TodoList;