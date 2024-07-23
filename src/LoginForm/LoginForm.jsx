// const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     const { login, password } = e.target.elements;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Login
//         <input type="text" name="login" />
//       </label>

//       <label>
//         Password
//         <input type="password" name="password" autoComplete="new-password" />
//       </label>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoginForm;

// * use Formik
import { Formik, Form, ErrorMessage } from "formik";
import { object, string } from "yup";
import { Input } from "./LoginForm.styled";

const initialValues = { login: "", password: "", color: "" };

const schema = object({
  login: string().required(),
  password: string().min(6).max(16).required(),
});

const handleSubmit = (values, actions) => {
  console.log("handleSubmit >> actions:::", actions);
  console.log("handleSubmit >> values:::", values);

  actions.resetForm();
};

const LoginForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}>
      <Form>
        <label>
          Login
          <Input type="text" name="login" placeholder="Enter your login here" />
          <ErrorMessage name="login" component="div" />
        </label>

        <label>
          Password
          <Input
            type="password"
            name="password"
            placeholder="Enter your password here"
            autoComplete="new-password"
          />
          <ErrorMessage name="password" component="div" />
        </label>

        <Input as="select" name="color">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Input>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
