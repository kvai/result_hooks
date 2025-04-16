import { useLocation, useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { useAuthContext } from "../customHooks/useAuthContext";

export const Login = () => {
  const { signin, user } = useAuthContext();
  const historyLink = useLocation().state?.from || "";

  const navigate = useNavigate();
  const handleNavigate = () => navigate("/");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("username") as string;

    signin(username, () => {
      navigate(!historyLink ? "/" : historyLink, {
        replace: true,
      });
    });
  };

  useEffect(() => {
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  }, [navigate, user]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          user: <input type="text" name="username" />
        </label>
        <button type="submit">Sign In</button>
      </form>
      <button onClick={handleNavigate}>Вернуться на главную</button>
    </>
  );
};
