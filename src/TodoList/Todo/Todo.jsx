import React from "react";
import { ItemText } from "./Todo.styled";

const Todo = ({ completed, text, onToggleCompleted, onDeleteTodo, id }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => {
          onToggleCompleted(id);
        }}
      />
      <ItemText isCompleted={completed}>Task: {text}</ItemText>
      <button
        onClick={() => {
          onDeleteTodo(id);
        }}>
        Delete task
      </button>
    </>
  );
};

export default Todo;
