import { HamburgerWrapper, Line } from '../../styles/Hamburger';

type Props = {
  isOpen: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};

const Hamburger = ({ isOpen, onClick }: Props) => {
  return (
    <HamburgerWrapper onClick={() => onClick(!isOpen)}>
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
      <Line isOpen={isOpen} />
    </HamburgerWrapper>
  );
};

export default Hamburger;
