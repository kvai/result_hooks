import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <h1>404 - Not Found</h1>
      <Link to="/">Перейти на главную</Link>
    </>
  );
};
