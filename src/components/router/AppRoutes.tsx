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
            <Route path="character">
              <Route index element={<LazyItemsList dataType="character" />} />
              <Route path=":id" element={<LazyCard dataType="character" />} />
            </Route>

            <Route path="episode">
              <Route index element={<LazyItemsList dataType="episode" />} />
              <Route path=":id" element={<LazyCard dataType="episode" />} />
            </Route>

            <Route path="location">
              <Route index element={<LazyItemsList dataType="location" />} />
              <Route path=":id" element={<LazyCard dataType="location" />} />
            </Route>
          </Route>

          <Route path="*" element={<LazyNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
