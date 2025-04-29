import { lazy } from "react";

export const LazyCard = lazy(() =>
  import("../Card/Card").then((module) => ({
    default: module.Card,
  }))
);
