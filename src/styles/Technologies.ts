import styled from 'styled-components';

export const TechnologiesWrapper = styled.div`
  grid-column: 1/4;
  grid-row: 5/6;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 10px;
`;
