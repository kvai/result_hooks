import { lazy } from "react";

export const LazyNotFound = lazy(() =>
  import("../NotFound").then((module) => ({
    default: module.NotFound,
  }))
);
