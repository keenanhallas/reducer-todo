import React, { useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoForm from "../src/TodoForm";
import TodoList from "../src/TodoList";
import { initialState, todoReducer } from "../src/reducers";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoForm state={state} dispatch={dispatch}/>
      <TodoList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
