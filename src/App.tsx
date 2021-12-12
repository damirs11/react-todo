import React, { useState } from 'react';
import './App.css';
import { Todo } from './api/Todo';
import { v4 as uuidv4 } from 'uuid';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';

function App() {
  const today  = new Date();

  const [toggleDone, setToggleDone] = useState(false);
  const [todoList, setTodoList] = useState([] as Todo[]);

  const addTodo = (value: string) => setTodoList([...todoList, {id: uuidv4(), title: value, done: false}]);
  const toggleTodo = (todo: Todo) => {
    let result = todoList.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.done = !_todo.done;
      }
      return _todo;
    });
    setTodoList(result);
  }
  const deleteAllTasks = () => setTodoList([])
  const getTodoList = () => todoList.filter(todo => toggleDone ? todo.done : !todo.done)


  return (
    <div className="App">
      <div className="container">
        <div className="time">
          {today.toLocaleDateString("ru-RU", {weekday: 'long'})}
          <br/>
          {today.toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}
        </div>
        
        <div className="todo-container">
            <TodoAdd callback={addTodo} />
            <TodoList todoList={getTodoList()} toggleTodo={toggleTodo} />
        </div>
        
        <div className="actions">
          <button type="button" onClick={() => setToggleDone(!toggleDone)}>
            <span>{toggleDone ? ("Показать новые") : ("Показать завершенные")}</span>
          </button>
          <button type="button" onClick={deleteAllTasks}><span>Очистить все</span></button>
        </div>
      </div>
    </div>
  );
}

export default App;