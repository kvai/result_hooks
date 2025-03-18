import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface ResponseData {
    body: string
    id: number
    title: string
    userId: number
}

export const useFetch = (url: string): {
    data: ResponseData[] | null
    isLoading: boolean
    error: string
    refetch: (params?: Record<string, unknown>) => void
    
} => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = useCallback(async (params = {}) => {
    try {
      setIsLoading(true);
      const response = await axios.get(url, params);
      setData(response.data);
    } catch {
      setError('Произошла ошибка');
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData
  };
};

export default useFetch;