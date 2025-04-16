import ErrorBoundary from "./ErrorBoundary";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LazyHeader } from "./lazyModules/LazyHeader";

export const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<h1>Lazy Loading...</h1>}>
        <LazyHeader />
        <div>
          <ErrorBoundary fallback={<h1>Что-то пошло не так!</h1>}>
            <Outlet />
          </ErrorBoundary>
        </div>
      </Suspense>
    </>
  );
};
