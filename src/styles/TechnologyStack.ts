import styled from 'styled-components';
import { Theme } from '../theme/theme';

export const SingleTechnology = styled.div`
  position: relative;
  min-width: 150px;
  min-height: 150px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.secondaryTextColor};
  box-shadow: 0px 5px 20px ${({ theme }: { theme: Theme }) => theme.textColorOpacity};
  transition: 0.5s;

  :hover {
    transform: scale(0.95);
    > div {
      opacity: 1;
      z-index: 2;
    }
    > img {
      opacity: 0.3;
      z-index: 1;
    }
  }
`;

export const TechnologyImage = styled.img`
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 2;
`;

export const TechnologyRating = styled.div`
  position: absolute;
  justify-self: center;
  font-size: 30px;
  font-weight: 900;
  opacity: 0;
  z-index: 0;
`;
