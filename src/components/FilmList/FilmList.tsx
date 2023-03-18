import useFetch, { FetchedData } from '../../hooks/useFetch';
import { FilmLink, FilmsContainer, Message } from '../../styles/FilmList';

const FilmList = () => {
  const { loading, error, filmsData } = useFetch<FetchedData>('https://swapi.dev/api/films');

  return (
    <FilmsContainer>
      {loading ? (
        <Message>Loading data...</Message>
      ) : error ? (
        <Message error>{error}</Message>
      ) : filmsData && 'results' in filmsData ? (
        filmsData.results.map(({ episode_id, title }) => (
          <FilmLink key={episode_id} to={`/movies/${episode_id}`}>
            {title}
          </FilmLink>
        ))
      ) : (
        <Message>No results found.</Message>
      )}
    </FilmsContainer>
  );
};

export default FilmList;
