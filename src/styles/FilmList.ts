import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fadeIn } from './AnimatedHeader';

interface MessageProps {
  error?: boolean;
}

export const FilmsContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 20px;
  margin: 25px;
`;

export const Message = styled.p<MessageProps>`
  width: 100%;
  padding: 50px;
  letter-spacing: 2px;
  margin: 0;
  color: ${({ error }) => (error ? 'red' : 'black')};
  grid-column: 1/3;
  text-align: center;
  font-size: 20px;
`;

export const FilmLink = styled(Link)`
  text-decoration: none;
  padding: 25px;
  margin: 0;
  border: 1px solid rgba(187, 211, 255, 1);
  border-radius: 25%;
  min-width: 250px;
  text-align: center;
  flex-grow: 1;
  font-size: 20px;
  animation: ${fadeIn} 1.5s linear;
  -webkit-box-shadow: 0px 0px 20px 5px rgba(187, 211, 255, 1);
  -moz-box-shadow: 0px 0px 20px 5px rgba(187, 211, 255, 1);
  box-shadow: 0px 0px 10px 5px rgba(187, 211, 255, 1);
  transition: 0.5s;

  :hover {
    background-color: rgba(187, 211, 255, 1);
    border-color: rgba(187, 211, 255, 1);
    color: white;
    transform: scaleX(0.95);
  }
`;
