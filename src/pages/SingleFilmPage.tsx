import { useParams } from 'react-router-dom';
import useFetch, { Film } from '../hooks/useFetch';

interface ApiFixingTable {
  [key: string]: string;
}

const SingleFilmPage = () => {
  const { id } = useParams();
  const apiFixingTable: ApiFixingTable = { 1: '4', 2: '5', 3: '6', 4: '1', 5: '2', 6: '3' };
  const { loading, error, filmsData } = useFetch<Film>('https://swapi.dev/api/films', id && apiFixingTable[id]);

  return (
    <div style={{ margin: '120px' }}>
      <h1>{filmsData?.title}</h1>
      <p>{filmsData?.director}</p>
      <p>{filmsData?.producer}</p>
      <p>{filmsData?.release_date}</p>
      <p>{filmsData?.opening_crawl}</p>
    </div>
  );
};

export default SingleFilmPage;
