function TodoList({todoList = [], toggleTodo}) {
  return (
    <div className="list">
      {todoList.map(todo => {
          return (
            <div key={todo.id} className="row">
              <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)}/>
              <span>{todo.title}</span>
            </div>
          )
        }
      )}
    </div>
  );
}

  export default TodoList;
