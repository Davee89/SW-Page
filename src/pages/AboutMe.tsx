import useFetch from '../hooks/useFetch';

const AboutMe = () => {
  const { loading, error, filmsData } = useFetch('https://swapi.dev/api/films');

  return (
    <div>
      <section>
        <h1></h1>
        <div>
          <p></p>
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
      <section>
        <h2>Favorite Movies</h2>
        <div>
          {loading ? (
            <p>Loading data...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filmsData && 'results' in filmsData ? (
            filmsData.results.map(({ episode_id, title }) => <p key={episode_id}>{title}</p>)
          ) : (
            <p>No results found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
