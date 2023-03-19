import styled from "styled-components";

export const SingleFilmWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 25px;
  min-height: 40vh;
  box-shadow: 0px 0px 5px 0px rgba(187, 211, 255, 1);
  background-color: white;
`;

export const Title = styled.h1`
  letter-spacing: 5px;
  text-align: center;
`;

export const Subtitle = styled.span`
  font-weight: bold;
  letter-spacing: 4px;
`;

export const SmallSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 50%;
`;

export const FilmSectionWrapper = styled.div`
  display: flex;
  gap: 25px;
  margin-top: 50px;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FilmSection = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: start;
`;

export const Field = styled.p`
  width: max-content;
`;

export const Paragraph = styled.p`
  text-align: justify;
`;
