import { useParams } from 'react-router-dom';

const SingleFilmPage = () => {
  const { id } = useParams();

  return <div>SingleFilmPage {id}</div>;
};

export default SingleFilmPage;
