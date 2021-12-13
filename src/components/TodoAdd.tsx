import { useState } from "react";

type Props = {
  callback: (todoTitle: string) => void;
}

function TodoAdd(props: Props) {

  const [input, setInput] = useState("");

  const addTodo = ($event: any) => {
    $event.preventDefault();
    if (!input) return;
    props.callback(input);
    setInput("");
  }

  return (
    <div className="add">
        <input type="text" value={input} onChange={e => setInput(e.target.value)}></input>
        <button type="submit" onClick={addTodo}><span>+</span></button>
    </div>
  );
}
  
export default TodoAdd;
  