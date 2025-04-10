import { useEffect, useState } from "react";
import { getData } from "../helpers/httpRequest";
import { ResultType } from "../types";

export const useFetchData = (filePath: string) => {
  const [data, setData] = useState<ResultType>([] as ResultType);
  const [loading, setLoading] = useState<boolean>(true);

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
  }, [filePath]);

  return { data, loading };
};
