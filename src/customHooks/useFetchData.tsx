import { useEffect, useState } from "react";
import { getData } from "../helpers/httpRequest";
import { ResultType } from "../../types/types";
import { useLoadingContext } from "./useLoadingContext";

export const useFetchData = (filePath: string) => {
  const [data, setData] = useState<ResultType>([] as ResultType);
  const { setLoading } = useLoadingContext();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const result: ResultType = await getData(filePath);
        setData(result);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [filePath, setLoading]);

  return { data };
};
