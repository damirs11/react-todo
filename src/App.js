import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import './App.css';

function App() {

  const today  = new Date();

  const [toggleDone, setToggleDone] = useState(false);
  const [todoList, setTodoList] = useState([]);

  const addTodo = ($event) => {
    $event.preventDefault();
    const value = $event.target[0].value;
    if (!value) return; 
    setTodoList([...todoList, {id: uuidv4(), title: $event.target[0].value, done: false}]);
  }
  const toggleTodo = (todo) => {
    let result = todoList.map(_todo => {
      if (_todo.id === todo.id) {
        _todo.done = !_todo.done;
      }
      return _todo;
    });
    setTodoList(result);
  }
  const deleteAllTasks = () => setTodoList([])


  return (
    <div className="App">
      <div className="container">
        <div className="time">
          {today.toLocaleDateString("ru-RU", {weekday: 'long'})}
          <br/>
          {today.toLocaleDateString("ru-RU", {year: 'numeric', month: 'long', day: 'numeric'})}
        </div>
        
        <div className="todo-container">
            <div className="add">
              <form onSubmit={addTodo}>
                <input type="text"></input>
                <button type="sumbit"><span>+</span></button>
              </form>
            </div>
            <div className="title">
            </div>
            <div className="list">
              {todoList.filter(todo => toggleDone ? todo.done : !todo.done).map(todo => {
                  return (
                    <div key={todo.id} className="row">
                      <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)}/>
                      <span>{todo.title}</span>
                    </div>
                  )
                }
              )}
            </div>
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
