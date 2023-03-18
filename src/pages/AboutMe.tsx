import FilmList from '../components/FilmList/FilmList';
import MyDetails from '../components/MyDetails/MyDetails';
import Section from '../components/Section/Section';
import Technologies from '../components/Technologies/Technologies';

const AboutMe = () => {
  return (
    <div>
      <Section sectionTitle="Dawid Matras">
        <MyDetails />
      </Section>
      <Section sectionTitle="My Stack">
        <Technologies />
      </Section>
      <Section sectionTitle="Favorite Movies">
        <FilmList />
      </Section>
    </div>
  );
};

export default AboutMe;
