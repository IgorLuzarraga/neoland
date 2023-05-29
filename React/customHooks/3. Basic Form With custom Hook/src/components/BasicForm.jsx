import { useEffect } from "react";
import Message from "./Message";
import useForm from '../hooks/useForm'

const BasicForm = () => {
  const { formState, onInputChange, onResetForm } =
    useForm({
      userName: "",
      email: "",
      password: "",
    });

  const { userName, email, password } = formState

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <>
      {showBasicForm(userName, email, password, onInputChange)}
      {userName == "user" && <Message />}
    </>
  )

};

const showBasicForm = (userName, email, password, onInputChange) =>
  <>
    <h1>Basic Form</h1>
    <hr />

    <input
      type="text"
      name="userName"
      id="userName"
      value={userName}
      className="form-control"
      onChange={onInputChange}
    />

    <input
      type="email"
      name="email"
      id="email"
      value={email}
      className="form-control mt-2"
      onChange={onInputChange}
    />

    <input
      type="password"
      name="password"
      id="password"
      value={password}
      className="form-control mt-2"
      onChange={onInputChange}
    />
  </>

export default BasicForm;
