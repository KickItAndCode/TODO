import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Todo from "./Todo";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <Paper>
      {todos.map(todo => (
        <>
          <Todo
            id={todo.id}
            removeTodo={removeTodo}
            task={todo.task}
            key={todo.id}
            completed={todo.completed}
          />
          <Divider />
        </>
      ))}
    </Paper>
  );
};

export default TodoList;
