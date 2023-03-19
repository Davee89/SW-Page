import { useEffect, useState } from 'react';

export type Film = {
  release_date: string;
  director: string;
  opening_crawl: string;
  producer: string;
  title: string;
  episode_id: number;
};

export type FetchedData = {
  count: number;
  next: null;
  previous: null;
  results: Film[];
};

const useFetch = <T>(url: string, id?: string) => {
  const [filmsData, setFilmsData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getFilms = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${url}/${id || ''}`);
        const data = await res.json();
        setFilmsData(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };
    getFilms();
  }, []);

  return { filmsData, loading, error };
};

export default useFetch;
