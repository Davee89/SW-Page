import AnimatedHeader from '../components/AnimatedHeader/AnimatedHeader';
import StarWarsFallingText from '../components/StarWarsVibe/StarWarsVibe';
import TextColumn from '../components/TextColumn/TextColumn';
import { ColumnSection, EmptyContainer, Headliner, Hero } from '../styles/Home';

const Home = () => {
  return (
    <>
      <Hero>
        <EmptyContainer />
        <Headliner>
          <AnimatedHeader name="Dawid" />
          <AnimatedHeader delayed name="Matras" />
        </Headliner>
      </Hero>
      <ColumnSection>
        <TextColumn />

        <StarWarsFallingText
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, pariatur natus exercitationem minus, optio
          quam animi sunt eius maiores, saepe laudantium illum iste totam doloremque rem dolorum quasi et placeat."
        />
        <TextColumn />
      </ColumnSection>
    </>
  );
};

export default Home;
