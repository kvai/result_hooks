import ErrorBoundary from "./ErrorBoundary";

import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { LazyHeader } from "./lazyModules/LazyHeader";
import { Loading } from "./Loading";

export const MainLayout = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
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
