import { useEffect } from "react";
import { useState } from "react";
import Message from "./Message";
import MouseCoords from "./MouseCoords";

const BasicForm = () => {
  const [formState, setFormState] = useState({
    userName: "",
    email: "",
  });

  const { userName, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    console.log(formState);
  }, [formState]);

  return (
    <>
      {showBasicForm(userName, email, onInputChange)}
      <MouseCoords />
      {userName == "user" && <Message />}
    </>
  )

};

const showBasicForm = (userName, email, onInputChange) =>
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
  </>

export default BasicForm;
