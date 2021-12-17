import { Todo } from '../api/Todo';
import List from '@mui/material/List';
import { ListItem, Checkbox, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

function TodoList({todoList = [], toggleTodo}: {todoList: Todo[], toggleTodo: (todo: Todo) => void}) {
  return (
    <List sx={{ paddingTop: 2.5 }}>
        {todoList.map(todo => {
            return (
              <ListItem disablePadding>
                <ListItemButton dense onClick={() => toggleTodo(todo)}>
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      tabIndex={-1}
                      checked={todo.done}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={todo.title} />
                </ListItemButton>
              </ListItem>
            )
          }
        )}
    </List>
  );
}

  export default TodoList;
