import { CombinedProps } from "../types";
import { Input } from "./input/Input";

export const Signup = ({ handleSubmit, handleChange }: CombinedProps) => {
  return (
    <form onSubmit={handleSubmit} onChange={handleChange}>
      <Input
        label="Имя"
        placeholder="Введите имя"
        withAsterisk
        name="name"
        radius="xl"
        error="Some error"
      />
      <Input
        label="Ник"
        placeholder="Введите Ник"
        withAsterisk
        name="nick"
        variant="filled"
      />
      <Input
        label="Почта"
        placeholder="Введите Почту"
        type="email"
        name="email"
      />
      <fieldset>
        <legend>Выберите пол:</legend>
        <Input type="radio" name="sex" value="мужской" label="мужской" />
        <Input type="radio" name="sex" value="женский" label="женский" />
      </fieldset>

      <Input
        label="Пароль"
        placeholder="Введите Пароль"
        type="password"
        withAsterisk
        name="password"
      />
      <Input
        label="Повторите пароль"
        placeholder="Повторите пароль"
        type="password"
        withAsterisk
        name="confirmPassword"
      />
      <button type="submit">Войти</button>
    </form>
  );
};
