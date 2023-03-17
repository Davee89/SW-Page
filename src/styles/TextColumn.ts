import styled from 'styled-components';

interface DarkProps {
  dark?: boolean;
}

export const ColumnWrapper = styled.div`
  justify-self: center;
  border: 1px solid;
  padding: 10px;
`;

export const ColumnHeadliner = styled.h2<DarkProps>`
  text-align: center;
  letter-spacing: 5px;
  color: ${({ dark }) => (dark ? 'red' : 'lightblue')};
`;

export const ColumnText = styled.p<DarkProps>`
  text-align: justify;
  font-size: 20px;
  letter-spacing: 2px;
`;
