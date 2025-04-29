import { lazy } from "react";

export const LazyHeader = lazy(() =>
  import("../Header/Header").then((module) => ({
    default: module.Header,
  }))
);
