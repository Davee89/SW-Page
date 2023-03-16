import { ColumnContainer, ColumnSection, Container, EmptyContainer, Headliner, Hero } from '../styles/Home';

const Home = () => {
  return (
    <>
      <Hero>
        <EmptyContainer />
        <Container>
          <Headliner>
            Dawid<span>Matras</span>
          </Headliner>
        </Container>
      </Hero>
      <ColumnSection>
        <ColumnContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem doloremque autem consequuntur? Iste quod
          non, veritatis libero odit pariatur incidunt nulla eum officiis labore sunt mollitia accusamus quia similique
          dolor?
        </ColumnContainer>
        <ColumnContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, pariatur natus exercitationem minus, optio
          quam animi sunt eius maiores, saepe laudantium illum iste totam doloremque rem dolorum quasi et placeat.
        </ColumnContainer>
        <ColumnContainer>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur consectetur soluta quam facilis quae
          nulla, eius earum ea hic veritatis exercitationem harum eaque repellendus quas perspiciatis nam beatae magnam!
          Ratione.
        </ColumnContainer>
      </ColumnSection>
    </>
  );
};

export default Home;
