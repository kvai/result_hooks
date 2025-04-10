import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { MainLayout } from "../MainLayout";
import { Card } from "../Card/Card";
import { NotFound } from "../NotFound";
import { ItemsList } from "../ItemsList/ItemsList";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path="characters">
          <Route index element={<ItemsList dataType="characters" />} />
          <Route path=":id" element={<Card dataType="characters" />} />
        </Route>

        <Route path="episodes">
          <Route index element={<ItemsList dataType="episodes" />} />
          <Route path=":id" element={<Card dataType="episodes" />} />
        </Route>

        <Route path="locations">
          <Route index element={<ItemsList dataType="locations" />} />
          <Route path=":id" element={<Card dataType="locations" />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
