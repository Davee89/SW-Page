import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../theme/theme';
import { fadeIn } from './AnimatedHeader';

interface MessageProps {
  error?: boolean;
}

export const FilmsContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 20px;
  padding: 20px;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const Message = styled.p<MessageProps>`
  width: 100%;
  padding: 50px;
  letter-spacing: 2px;
  margin: auto;
  color: ${({ error }) => (error ? 'red' : 'black')};
  grid-column: 1/3;
  text-align: center;
  font-size: 20px;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  padding: 25px;
  margin: 0;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.textColor};
  border-radius: 25%;
  text-align: center;
  flex-grow: 1;
  font-size: 20px;
  animation: ${fadeIn} 1.5s linear;
  -webkit-box-shadow: 0px 0px 20px 5px ${({ theme }: { theme: Theme }) => theme.textColor};
  -moz-box-shadow: 0px 0px 20px 5px ${({ theme }: { theme: Theme }) => theme.textColor};
  box-shadow: 0px 0px 10px 5px ${({ theme }: { theme: Theme }) => theme.textColor};
  transition: 0.5s;

  :hover {
    background-color: ${({ theme }: { theme: Theme }) => theme.textColor};
    border-color: ${({ theme }: { theme: Theme }) => theme.textColor};
    color: white;
    transform: scaleX(0.95);
  }
`;
