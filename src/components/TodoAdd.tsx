type Props = {
  callback: (todoTitle: string) => void;
}

function TodoAdd(props: Props) {
  const addTodo = ($event: any) => {
    $event.preventDefault();
    const value = $event.target[0].value;
    $event.target[0].value = null;
    if (!value) return;
    props.callback(value);
  }

  return (
    <div className="add">
      <form onSubmit={addTodo}>
        <input type="text"></input>
        <button type="submit"><span>+</span></button>
      </form>
    </div>
  );
}
  
export default TodoAdd;
  