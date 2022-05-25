import React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.ReactNode
};
const Card: React.FC<Props> = ({children}) => <StyledCard>{children}</StyledCard>;

const StyledCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  color: #2c2560 !important;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export default Card;
