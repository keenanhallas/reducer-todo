import React from "react";
import TodoCard from "../src/TodoCard";

const TodoList = ({ state, dispatch }) => {
    return(
        <div className="todoList" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            {state.todos.map((todo, i) => {
                return <TodoCard key={i} todo={todo} state={state} dispatch={dispatch}/>
            })}
        </div>
    );
}

export default TodoList;