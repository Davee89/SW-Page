import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface MessageProps {
  error?: boolean;
}

export const FilmsContainer = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  gap: 20px;
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
  border: 1px solid;
  border-radius: 25%;
  min-width: 250px;
  text-align: center;
  flex-grow: 1;
  font-size: 20px;

  :hover {
    background-color: lightblue;
    border-color: white;
    color: white;
  }
`;
