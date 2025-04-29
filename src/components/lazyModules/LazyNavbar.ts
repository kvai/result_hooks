import { lazy } from "react";

export const LazyNavbar = lazy(() =>
  import("../Navbar/Navbar").then((module) => ({
    default: module.Navbar,
  }))
);
