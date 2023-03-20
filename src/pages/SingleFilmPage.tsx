import { useNavigate, useParams } from 'react-router-dom';
import useFetch, { Film } from '../hooks/useFetch';
import { Message } from '../styles/FilmList';
import {
  Field,
  FilmSection,
  FilmSectionWrapper,
  Paragraph,
  SingleFilmWrapper,
  Subtitle,
  Title,
  SmallSection,
  LinkBack,
  Wrapper,
} from '../styles/SingleFilmPage';

interface ApiFixingTable {
  [key: string]: string;
}

const SingleFilmPage = () => {
  const { id } = useParams();
  const apiFixingTable: ApiFixingTable = { 1: '4', 2: '5', 3: '6', 4: '1', 5: '2', 6: '3' };
  const { loading, error, filmsData } = useFetch<Film>('https://swapi.dev/api/films', id && apiFixingTable[id]);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <LinkBack onClick={() => navigate(-1)}>Go back</LinkBack>
      {loading ? (
        <Message>Loading data...</Message>
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <SingleFilmWrapper>
          <Title>{filmsData?.title}</Title>
          <Subtitle>{filmsData?.release_date}</Subtitle>
          <FilmSectionWrapper>
            <FilmSection>
              <SmallSection>
                <Subtitle>Producer:</Subtitle>
                <Field>{filmsData?.producer}</Field>
              </SmallSection>
              <SmallSection>
                <Subtitle>Director:</Subtitle>
                <Field>{filmsData?.director}</Field>
              </SmallSection>
            </FilmSection>
            <FilmSection>
              <Subtitle>Opening Crawl:</Subtitle>
              <Paragraph>{filmsData?.opening_crawl}</Paragraph>
            </FilmSection>
          </FilmSectionWrapper>
        </SingleFilmWrapper>
      )}
    </Wrapper>
  );
};

export default SingleFilmPage;
