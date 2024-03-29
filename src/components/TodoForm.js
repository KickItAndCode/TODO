import React from "react";
import { Paper, TextField } from "@material-ui/core";
import { useInputState } from "../hooks/useInputState";

const TodoForm = ({ addTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  return (
    <div>
      <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
        <form
          onSubmit={e => {
            e.preventDefault();
            addTodo(value);
            reset();
          }}
        >
          <TextField
            value={value}
            onChange={handleChange}
            margin="normal"
            label="Add New Todo"
            fullWidth
          />
        </form>
      </Paper>
    </div>
  );
};

export default TodoForm;
