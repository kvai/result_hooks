import { lazy } from "react";

export const LazyItemsList = lazy(() =>
  import("../ItemsList/ItemsList").then((module) => ({
    default: module.ItemsList,
  }))
);
