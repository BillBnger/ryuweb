import React, {useCallback, useMemo} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import UnlockWallet from '../../components/UnlockWallet';
import PageHeader from '../../components/PageHeader';
import ExchangeCard from './components/ExchangeCard';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import useBondStats from '../../hooks/useBondStats';
import useBamStats from '../../hooks/useBamStats';
import useBamFinance from '../../hooks/useBamFinance';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import {useTransactionAdder} from '../../state/transactions/hooks';
import ExchangeStat from './components/ExchangeStat';
import useTokenBalance from '../../hooks/useTokenBalance';
import useBondsPurchasable from '../../hooks/useBondsPurchasable';
import {getDisplayBalance} from '../../utils/formatBalance';
import { BOND_REDEEM_PRICE, BOND_REDEEM_PRICE_BN, DECIMALS_18 } from '../../bam-finance/constants';
import { Alert } from '@material-ui/lab';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import HomeImage from '../../assets/img/background.jpg';
import { Grid , Box, Container } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


const BackgroundImage = createGlobalStyle`
  body {
    background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'absolute',
    bottom: '0',
    paddingTop: '15px',
    paddingBottom: '15px',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
    height: '1.3rem',
    fontFamily: 'superstar',
      [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  link: {
    width: '24px',
    height: '24px',
    display: 'inline',
    marginLeft: '20px',
  },

  img: {
    width: '24px',
    height: '24px',
  },
}));

const Bond: React.FC = () => {
  const {path} = useRouteMatch();
  const {account} = useWallet();
  const classes = useStyles();
  const bamFinance = useBamFinance();
  const addTransaction = useTransactionAdder();
  const bondStat = useBondStats();
  const bamStat = useBamStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondsPurchasable = useBondsPurchasable();

  //const bondBalance = useTokenBalance(bamFinance?.BBOND);
  //const scalingFactor = useMemo(() => (cashPrice ? Number(cashPrice) : null), [cashPrice]);


  return (
    <Switch>
      <Page>
      <BackgroundImage />
      <Container>   
              <Grid item xs={12} md={12} lg={12} >     
                  <h2 style={{ fontSize: '80px', textAlign:'center' }}>Bam Guides</h2>   

                  <h2 style={{textAlign:'center', marginTop: '60px' }}>Beginner tutorial on Bam staking & adding to LPs</h2><br></br>

                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/JBWCOadvqbw" title="Bamboo Finance Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                  <h2 style={{textAlign:'center', marginTop: '60px' }}>Zone 1 - Introductions & what to do when Bam is above $2</h2><br></br>

                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB03Ep-LDgn0_nHdFGuYcO030" title="Bamboo Finance Videos" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
              
                  <h2 style={{textAlign:'center', marginTop: '60px' }}>The Basics of Seigniorage Protocols</h2><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/videoseries?list=PL_Nr1FoFNB02T0LSnRbFMFJoLTU4yszqJ" title="Bamboo Finance Videos"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>

                 <h2 style={{textAlign:'center', marginTop: '60px'}}>How to stake LP tokens & Bdao at Bamboo Finance</h2><br></br>
                  <iframe width="100%" height="550px" src="https://www.youtube.com/embed/xHVqLK_Segw?rel=0" title="Bamboo Finance Videos"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                  
              </Grid>
      </Container>
      </Page>
    </Switch>
  );
};

const StyledBond = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const StyledStatsWrapper = styled.div`
  display: flex;
  flex: 0.8;
  margin: 0 20px;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 80%;
    margin: 16px 0;
  }
`;

export default Bond;