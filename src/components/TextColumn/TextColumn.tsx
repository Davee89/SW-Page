import { ColumnText, ColumnWrapper } from '../../styles/TextColumn';
import { ColumnHeadliner } from '../../styles/TextColumn';

type Props = {};

const TextColumn = (props: Props) => {
  return (
    <ColumnWrapper>
      <ColumnHeadliner>Light Side</ColumnHeadliner>
      <ColumnText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime veritatis quam ullam nam! Nesciunt odit sapiente
        ullam earum sed officiis aperiam odio rerum atque, quam voluptate repudiandae veniam voluptatibus maxime.
      </ColumnText>
    </ColumnWrapper>
  );
};

export default TextColumn;
