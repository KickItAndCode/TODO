import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const initialTodos = [
    { id: 1, task: "Clean Dishes", complete: false },
    { id: 2, task: "Wash Tesla", complete: false },
    { id: 3, task: "Take out Trash ", complete: false }
  ];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = newTodoText => {
    setTodos([...todos, { id: 4, task: newTodoText, complete: false }]);
  };

  const removeTodo = todoId => {
     const updatedtodos = todos.filter(todo => todo.id !== todoId)
     setTodos(updatedtodos)
  }
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{marginTop:'1rem'}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
