import styled from "styled-components";

interface DarkProps {
  dark?: boolean;
}

export const ColumnWrapper = styled.div`
  justify-self: center;
  padding: 20px;
`;

export const ColumnHeadliner = styled.h2<DarkProps>`
  text-align: center;
  font-size: 30px;
  letter-spacing: 5px;
  margin-bottom: 20px;
  color: ${({ dark }) => (dark ? "red" : "lightblue")};
`;

export const ColumnText = styled.p<DarkProps>`
  text-align: justify;
  line-height: 1.6;
  font-size: 18px;
  letter-spacing: 1px;
`;
