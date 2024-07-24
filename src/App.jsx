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
    todos: [],
    filter: "",
  };

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    parsedTodos && this.setState({ todos: parsedTodos });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("App >> componentDidUpdate >> prevState:::", prevState);
    // console.log("App >> componentDidUpdate >> this.state :>> ", this.state);

    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
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
