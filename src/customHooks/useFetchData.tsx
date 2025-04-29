import { useEffect, useState } from "react";
import axios from "axios";
import { useLoadingContext } from "./useLoadingContext";

interface ApiResponse<T> {
  results: T[];
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

interface FetchDataResult<T> {
  data: T[];
  error: string | null;
}

interface FetchDataProps {
  dataType: "character" | "episode" | "location";
  pageNumber?: string;
  id?: string;
}

export const useFetchData = <T,>(props: FetchDataProps): FetchDataResult<T> => {
  const { setLoading } = useLoadingContext();
  const url = `https://rickandmortyapi.com/api/${
    props.id ? props.dataType + "/" + props.id : props.dataType
  }`;
  const [result, setResult] = useState<FetchDataResult<T>>({
    data: [],
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setResult((prev) => ({ ...prev, error: null }));

        const response = await axios.get<ApiResponse<T>>(url, {
          params: { page: props.pageNumber },
        });

        setResult({
          data: response.data || [],
          error: null,
        });
      } catch (error) {
        setResult({
          data: [],
          error: error.message,
        });

        console.error("Fetch error:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setLoading, url, props.pageNumber]);

  return result;
};
