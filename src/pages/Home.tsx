import AnimatedHeader from "../components/AnimatedHeader/AnimatedHeader";
import StarWarsFallingText from "../components/StarWarsFallingText/StarWarsFallingText";
import TextColumn from "../components/TextColumn/TextColumn";
import { ColumnSection, EmptyContainer, Headliner, Hero } from "../styles/Home";

const paths = [
  {
    force: "Light Side",
    description:
      "The Light Side of React is gentle and peaceful, much like the Jedi Knights who wield it. Developers who follow the Light Side may prefer to use simpler hooks, such as useState and useEffect, to create elegant and responsive user interfaces. They may also choose to use libraries such as React Router to create easy-to-navigate web applications that provide a seamless user experience. While these tools may be less powerful than their Dark Side counterparts, they are often easier to learn and use, and can help developers to create applications that are easier to maintain over time. By following the Light Side of React, developers can create user-friendly applications that are a joy to use, and that provide a strong foundation for future development",
  },
  {
    force: "Dark Side",
    description:
      "The Dark Side of React is powerful and aggressive, much like the Sith Lords that wield it. Developers who are drawn to the Dark Side may prefer to use the more complex and powerful React hooks, such as useReducer and useContext, to gain greater control over their applications. They may also choose to use libraries such as Redux or MobX to manage the state of their application with greater precision. While these tools can be highly effective in the hands of a skilled developer, they come with a cost. Code that relies heavily on these hooks and libraries can become difficult to understand and maintain over time, leading to long-term technical debt. In addition, the Dark Side of React may be less accessible to less experienced developers, who may struggle to master these more complex hooks and libraries.",
  },
];

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
        <TextColumn text={paths[0].description} title={paths[0].force} />
        <StarWarsFallingText />
        <TextColumn dark text={paths[1].description} title={paths[1].force} />
      </ColumnSection>
    </>
  );
};

export default Home;
