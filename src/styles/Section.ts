import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  margin: auto;
  height: max-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    padding: 0 50px;
  }

  @media (max-width: 700px) {
    padding: 0 30px;
  }

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`;

export const SectionHeadliner = styled.h2`
  margin: 80px 0 25px;
  width: 100%;
  text-align: center;
  letter-spacing: 10px;
  font-size: 40px;
  padding: 20px;
  text-transform: uppercase;
`;
