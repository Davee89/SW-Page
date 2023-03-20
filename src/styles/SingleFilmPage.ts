import styled from 'styled-components';
import { Theme } from '../theme/theme';

export const Wrapper = styled.div`
  margin: auto 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 400px) {
    margin: 80px 20px;
  }
`;

export const SingleFilmWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  padding: 25px;
  min-height: 40vh;
  box-shadow: 0px 0px 5px 2px ${({ theme }: { theme: Theme }) => theme.textColorOpacity};
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

  @media (max-width: 550px) {
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

export const LinkBack = styled.button`
  align-self: center;
  text-decoration: none;
  font-weight: 900;
  color: black;
  text-transform: uppercase;
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  transition: 0.5s;
  border: ${({ theme }: { theme: Theme }) => theme.textColor} solid 1px;

  :hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.textColor};
    color: white;
  }
`;
