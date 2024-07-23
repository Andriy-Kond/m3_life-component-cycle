import React, { Component } from "react";

import TodoList from "TodoList";
import initialTodos from "dataBase/todos.json";
import AddTodo from "TodoList/AddTodo";
import shortid from "shortid";
import FilterTodo from "TodoList/FilterTodo";
import LoginForm from "LoginForm";

// import RegisterForm from "TodoList/RegisterForm";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  // toggleCompleted = todoId => {
  //   this.setState(prevState => ({
  //     todos: prevState.todos.map(todo => {
  //       if (todo.id === todoId) {
  //         return { ...todo, completed: !todo.completed };
  //       }

  //       return todo;
  //     }),
  //   }));

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTask = text => {
    const newTodo = { id: shortid.generate(), text, completed: false };

    this.setState(prevState => {
      return { todos: [newTodo, ...prevState.todos] };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  submitForm = todoData => console.log("todoData :>> ", todoData);

  render() {
    const { todos, filter } = this.state;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();
    const totalTodosCount = todos.length;

    return (
      <div>
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          // onChange комбінує onBlur/onFocus і onInput
          // onBlur={console.log("onBlur")}
          // onFocus={console.log("onFocus")}
        /> */}

        {/* <RegisterForm handleSubmit={this.submitForm} />
        <RegisterForm handleSubmit={this.submitForm} /> */}

        <p>Всього завдань: {totalTodosCount}</p>
        <p>Виконаних завдань: {completedTodoCount}</p>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <AddTodo onAddTodo={this.addTask} />
        <FilterTodo onChange={this.changeFilter} value={filter} />

        <br />
        <LoginForm />
      </div>
    );
  }
}

export default App;
