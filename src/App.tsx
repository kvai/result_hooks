import {  useState } from "react";
import "./App.css";
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";

function App() {
  const initialState = {};
  const [values, setValues] = useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Отправленные данные: ", values);
    setValues(initialState);
  };

  return (
    <>
      <Signin handleSubmit={handleSubmit} handleChange={handleChange} />
      <Signup handleSubmit={handleSubmit} handleChange={handleChange} />
    </>
  );
}

export default App;
