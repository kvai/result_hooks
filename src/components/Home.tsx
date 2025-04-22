import { useFetchData } from "../customHooks/useFetchData";

export const Home = () => {
  useFetchData("character", "2");

  return <h1>Helloooooo!</h1>;
};
