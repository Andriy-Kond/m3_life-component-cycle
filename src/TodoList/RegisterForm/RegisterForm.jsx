import React, { Component } from "react";
import {} from "./RegisterForm.styled";
import shortid from "shortid";

const initialState = {
  email: "",
  password: "",
  age: "child",
  agreeProcessingData: false,
  agreeLicense: "",
  cat: false,
  dog: false,
  turtle: false,
};
class RegisterForm extends Component {
  state = initialState;

  emailInputId = shortid.generate();
  passwordInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleAgree = e => {
    this.setState({ agreeProcessingData: e.currentTarget.checked });
  };

  handleChkBoxes = e => {
    const { name, checked } = e.currentTarget;
    this.setState({ [name]: checked });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    // console.log("this.state :>> ", this.state);
    this.props.handleSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState(initialState);
  };

  render() {
    const { email, password, age, agreeProcessingData, cat, dog, turtle } =
      this.state;
    // працюєю і так:
    // const emailInputId = shortid.generate();
    // const passwordInputId = shortid.generate();
    const checkAgree = shortid.generate();

    const catIdChkBx = shortid.generate();
    const dogIdChkBx = shortid.generate();
    const turtleIdChkBx = shortid.generate();

    return (
      <form onSubmit={this.handleSubmitForm}>
        <label htmlFor={this.emailInputId}>Email address</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={this.handleChange}
          id={this.emailInputId}
        />

        <label htmlFor={this.passwordInputId}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={this.handleChange}
          id={this.passwordInputId}
        />

        <label htmlFor={checkAgree}>Згода на обробку даних</label>
        <input
          id={checkAgree}
          type="checkbox"
          name="agreeProcessingData"
          onChange={this.handleAgree}
          checked={agreeProcessingData}
        />

        {/* Checkboxes */}
        <div>
          <label htmlFor={catIdChkBx}>Кіт</label>
          <input
            id={catIdChkBx}
            type="checkbox"
            name="cat"
            onChange={this.handleChkBoxes}
            checked={cat}
          />

          <label htmlFor={dogIdChkBx}>Пес</label>
          <input
            id={dogIdChkBx}
            type="checkbox"
            name="dog"
            onChange={this.handleChkBoxes}
            checked={dog}
          />

          <label htmlFor={turtleIdChkBx}>Черепаха</label>
          <input
            id={turtleIdChkBx}
            type="checkbox"
            name="turtle"
            onChange={this.handleChkBoxes}
            checked={turtle}
          />
        </div>

        {/* Radio buttons */}
        <div>
          <p>Вкажіть свій вік:</p>
          <label>
            <input
              type="radio"
              name="age"
              value="child"
              onChange={this.handleChange}
              checked={age === "child"}
            />
            Child
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="teenager"
              onChange={this.handleChange}
              checked={age === "teenager"}
            />
            Teenager
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="adult"
              onChange={this.handleChange}
              checked={age === "adult"}
            />
            Adult
          </label>
          <label>
            <input
              type="radio"
              name="age"
              value="senior"
              onChange={this.handleChange}
              checked={age === "senior"}
            />
            Senior
          </label>
        </div>

        <button type="submit" disabled={!this.state.agreeProcessingData}>
          Submit
        </button>
      </form>
    );
  }
}

export default RegisterForm;
