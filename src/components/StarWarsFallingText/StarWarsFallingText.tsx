import {
  CrawlDownWrapper,
  CrawlUpWrapper,
  StarWarsTextContainer,
  TitleWrapper,
} from "../../styles/StarWarsFallingText";

const fallingText = [
  "A long time ago",
  "in a galaxy far, far away...",
  "In the world of React,",
  "there are two sides to the force:",
  "the Light Side and the Dark Side.",
  "On the Dark Side, developers",
  "seek greater control",
  "over their applications,",
  "using complex hooks",
  "and libraries",
  "to bend the code to their will.",
  "On the Light Side,",
  "developers favor simplicity",
  "and elegance,",
  "using intuitive hooks and libraries",
  "to create user-friendly applications.",
  "However, like the Jedi",
  "and the Sith,",
  "both sides have their strengths",
  "and weaknesses.",
  "The Dark Side offers powerful tools",
  "for skilled developers,",
  "but can lead to convoluted code",
  "that is difficult to maintain.",
  "The Light Side,",
  "while easier to use,",
  "may lack the precision",
  "necessary for more complex applications",
  "Ultimately,",
  "the choice of which side to follow",
  "depends on the specific needs",
  "of the application",
  "and the skills",
  "of the development team.",
  "Whether you choose",
  "to embrace the Dark Side",
  "or the Light Side of React,",
  "May the force be with you",
];

const StarWarsFallingText = () => {
  const textBackwards = fallingText.reverse().map((text) => <p>{text.replace(text[0], text[0].toUpperCase())}</p>);

  return (
    <StarWarsTextContainer>
      <CrawlDownWrapper>
        <TitleWrapper>{textBackwards}</TitleWrapper>
      </CrawlDownWrapper>
      <CrawlUpWrapper>{fallingText.reverse().join(" ")}</CrawlUpWrapper>
    </StarWarsTextContainer>
  );
};

export default StarWarsFallingText;
