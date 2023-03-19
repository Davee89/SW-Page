import { ColumnText, ColumnWrapper } from "../../styles/TextColumn";
import { ColumnHeadliner } from "../../styles/TextColumn";

type Props = { text: string; title: string; dark?: boolean };

const TextColumn = ({ text, title, dark }: Props) => {
  return (
    <ColumnWrapper>
      <ColumnHeadliner dark={dark}>{title}</ColumnHeadliner>
      <ColumnText>{text}</ColumnText>
    </ColumnWrapper>
  );
};

export default TextColumn;
