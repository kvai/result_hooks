import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { MainLayout } from "../MainLayout";
import { LazyLogin } from "../lazyModules/LazyLogin";
import { PrivateRoute } from "../PrivateRoute";
import { LazyCard } from "../lazyModules/LazyCard";
import { LazyItemsList } from "../lazyModules/LazyItemsList";
import { LazyNotFound } from "../lazyModules/LazyNotFound";

export const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LazyLogin />} />
          <Route index element={<Home />} />

          <Route element={<PrivateRoute />}>
            <Route path="characters">
              <Route index element={<LazyItemsList dataType="characters" />} />
              <Route path=":id" element={<LazyCard dataType="characters" />} />
            </Route>

            <Route path="episodes">
              <Route index element={<LazyItemsList dataType="episodes" />} />
              <Route path=":id" element={<LazyCard dataType="episodes" />} />
            </Route>

            <Route path="locations">
              <Route index element={<LazyItemsList dataType="locations" />} />
              <Route path=":id" element={<LazyCard dataType="locations" />} />
            </Route>
          </Route>

          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
