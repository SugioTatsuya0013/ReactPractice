import React from 'react';
import logo from './logo.svg';
import {useState, useRef, useEffect} from "react";
import './App.css';
import {Counter, ToDoList} from './Lecture'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        {/* <p>{count}</p>
        <button onClick={() => {
          setCount((count) => (count += 1));
        }}>add</button> */}

        <Counter />

        <ToDoList />

        <ul id="taskList"></ul>

        <label htmlFor="tasks">Tasks</label>
          <ul id="ToDoTaskList"></ul>
          

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
