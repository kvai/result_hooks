import { CombinedProps } from "../types";
import { Input } from "./input/Input";

export const Signin = ({ handleSubmit, handleChange }: CombinedProps) => {
  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <Input type="email" label="Почта" name="email" />
      <Input type="password" label="Пароль" name="password" withAsterisk />
      <button type="submit">Войти</button>
    </form>
  );
};