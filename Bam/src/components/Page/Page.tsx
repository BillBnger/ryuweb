import React from 'react';
import {Container} from '@material-ui/core';
import useEagerConnect from '../../hooks/useEagerConnect';

import Footer from '../Footer';
import Nav from '../Nav';

type Props = {
  children?: React.ReactNode
};
const Page: React.FC <Props> = ({children}) => {
  useEagerConnect();
  return (
    <div style={{position: 'relative', minHeight: '100vh'}}>
      <Nav />
      <Container maxWidth="lg" style={{paddingBottom: '5rem'}}>
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Page;