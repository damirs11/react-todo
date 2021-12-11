function TodoAdd(callback) {
    const addTodo = ($event) => {
      $event.preventDefault();
      const value = $event.target[0].value;
      $event.target[0].value = null;
      if (!value) return;
      callback.callback(value);
    }
  
    return (
      <div className="add">
        <form onSubmit={addTodo}>
          <input type="text"></input>
          <button type="sumbit"><span>+</span></button>
        </form>
      </div>
    );
  }
  
  export default TodoAdd;
  