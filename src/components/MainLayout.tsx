import ErrorBoundary from "./ErrorBoundary";

import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <div>
        <ErrorBoundary fallback={<h1>Что-то пошло не так!</h1>}>
          <Outlet />
        </ErrorBoundary>
      </div>
    </>
  );
};
