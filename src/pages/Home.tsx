import { Container, EmptyContainer, Headliner, Hero } from '../styles/Home';

const Home = () => {
  return (
    <Hero>
      <EmptyContainer />
      <Container>
        <Headliner>
          Dawid<span>Matras</span>
        </Headliner>
      </Container>
    </Hero>
  );
};

export default Home;
