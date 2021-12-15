import { IconButton, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';

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
      <TextField
        className="input"
        multiline
        maxRows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton sx={{width: 55, marginLeft: "5px"}} className="button" onClick={addTodo}>
        <AddIcon />
      </IconButton>
    </div>
  );
}
  
export default TodoAdd;
  