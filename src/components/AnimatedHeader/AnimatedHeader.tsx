import { HeaderWrapper, Letter } from '../../styles/AnimatedHeader';

type HeaderProps = {
  name: string;
  delayed?: boolean;
};

const AnimatedHeader = ({ name, delayed }: HeaderProps) => {
  return (
    <HeaderWrapper>
      {[...name].map((letter, index) => (
        <Letter delayed={delayed} key={index}>
          {letter}
        </Letter>
      ))}
    </HeaderWrapper>
  );
};

export default AnimatedHeader;
