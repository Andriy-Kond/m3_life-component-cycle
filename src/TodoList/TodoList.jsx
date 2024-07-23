import React, { Component } from "react";
import { List, ListItem, ItemText } from "./TodoList.styled";

class TodoList extends Component {
  state = {};

  render() {
    const { todos, onDeleteTodo, onToggleCompleted } = this.props;
    return (
      <List>
        {todos.map(({ id, text, completed }) => (
          <ListItem key={id}>
            <ItemText isCompleted={completed}>Task: {text}</ItemText>

            <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                onToggleCompleted(id);
              }}
            />

            <button
              onClick={() => {
                onDeleteTodo(id);
              }}>
              Delete task
            </button>
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;
