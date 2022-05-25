import {Grid} from '@material-ui/core';
import React from 'react';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import Page from '../../components/Page';
import BamNode from '../BamNode';
import BamCard from './BamCard';
import BdaoMimCard from './BdaoMimCard';

import {Alert} from '@material-ui/lab';

const BamNodes = () => {
  const {path} = useRouteMatch();
  return (
    <Page>
      <Switch>
        <Route exact path={path}>
          <h2 style={{fontSize: '80px', textAlign: 'center', color:'#fff'}}>NODES</h2>
          <Alert variant="filled" severity="info">
                Nodes start on May 17 at 11:00:00 AM EST
            </Alert>
          <Grid container spacing={3} style={{marginTop: '20px'}}>
            
            <BamCard />
            <BdaoMimCard />
          </Grid>
        </Route>
        <Route path={`${path}/:bankId`}>
          <BamNode />
        </Route>
      </Switch>
    </Page>
  );
};

export default BamNodes;
