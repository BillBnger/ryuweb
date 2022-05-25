import React from 'react';
import styled from 'styled-components';

// import Card from '../Card';
// import CardContent from '../CardContent';
// import Container from '../Container';
import {Button, Card, CardContent, Container, Typography} from '@material-ui/core';

export interface ModalProps {
  onDismiss?: () => void;
}
type Props = {
  children?: React.ReactNode
};
const Modal : React.FC<Props> = ({children}) => {
  return (
    <Container >
      <StyledModal>
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </StyledModal>
    </Container>
  );
};

const StyledModal = styled.div`
  border-radius: 12px;
  position: relative;
  max-height: 500px;
  overflow-y: auto;
  margin-top:30px;
  margin-bottom:30px;

`;

export default Modal;
