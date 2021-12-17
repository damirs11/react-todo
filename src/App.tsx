import { useState } from 'react';
import './App.css';
import { Todo } from './api/Todo';
import { v4 as uuidv4 } from 'uuid';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import LangSelector from './components/LangSelector';
import DateNow from './components/DateNow';

function App() {
  const { t } = useTranslation(); 

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
        <div className="top">
          <DateNow />

          <LangSelector/>
        </div>

        <div className="todo-container">
            <TodoAdd callback={addTodo} />
            <TodoList todoList={getTodoList()} toggleTodo={toggleTodo} />
        </div>
        
        <div className="actions">
          <Button size="small" onClick={() => setToggleDone(!toggleDone)}>
            <span>{toggleDone ? (t('actions.new')) : (t('actions.done'))}</span>
          </Button>
          <Button size="small" onClick={deleteAllTasks}>
            <span>{t('actions.clean')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;