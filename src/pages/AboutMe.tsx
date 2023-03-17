import FilmList from '../components/FilmList/FilmList';
import Section from '../components/Section/Section';

const AboutMe = () => {
  return (
    <div>
      <Section sectionTitle="Dawid Matras">
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
      </Section>
      <Section sectionTitle="Favorite Movies">
        <FilmList />
      </Section>
    </div>
  );
};

export default AboutMe;
