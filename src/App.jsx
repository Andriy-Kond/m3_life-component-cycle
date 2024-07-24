import React, { Component } from "react";

import TodoList from "TodoList";
import initialTodos from "dataBase/todos.json";
import AddTodo from "TodoList/AddTodo";
import shortid from "shortid";
import FilterTodo from "TodoList/FilterTodo";
import LoginForm from "LoginForm";
import Modal from "modal";

// import RegisterForm from "TodoList/RegisterForm";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    isOpenModal: false,
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

  toggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { todos, filter, isOpenModal } = this.state;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();
    const totalTodosCount = todos.length;

    return (
      <>
        {/* <p>Всього завдань: {totalTodosCount}</p>
        <p>Виконаних завдань: {completedTodoCount}</p>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />

        <AddTodo onAddTodo={this.addTask} />
        <FilterTodo onChange={this.changeFilter} value={filter} />

        <br />
        <LoginForm /> */}
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {isOpenModal && (
          <Modal toggleModal={this.toggleModal}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quis debitis quibusdam doloremque perspiciatis distinctio
              consequuntur nobis ipsa dolore earum quisquam qui eveniet maxime
              ad, numquam libero quos, veritatis accusantium similique tempora
              nemo? Quo consequuntur iusto eius aut facilis doloribus aliquam
              quae vitae dolor voluptatibus? Accusamus corrupti cumque odio
              illo.
            </p>
          </Modal>
        )}
      </>
    );
  }
}

export default App;
