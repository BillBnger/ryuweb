import React, { useMemo } from 'react';
import Page from '../../components/Page';
import { createGlobalStyle } from 'styled-components';
import CountUp from 'react-countup';
import CardIcon from '../../components/CardIcon';
import TokenSymbol from '../../components/TokenSymbol';
import useBamStats from '../../hooks/useBamStats';
import useLpStats from '../../hooks/useLpStats';
import useLpStatsBTC from '../../hooks/useLpStatsBTC';
import useModal from '../../hooks/useModal';
import useZap from '../../hooks/useZap';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/useBdaoStats';
import useTotalValueLocked from '../../hooks/useTotalValueLocked';
import {
  Bam as bamTesting,
  Bdao as bShareTesting,
} from './../../bam-finance/deployments/deployments.testing.json';
import {
  Bam as bamProd,
  Bdao as bShareProd,
} from './../../bam-finance/deployments/deployments.mainnet.json';
import { roundAndFormatNumber } from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import { Box, Button, Card, CardContent, Grid, Paper } from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import { Alert } from '@material-ui/lab';
import useBank from '../../hooks/useBank';
import { makeStyles } from '@material-ui/core/styles';
import useBamFinance from '../../hooks/useBamFinance';
import kyc from '../../assets/img/kyc.jpg';
import wamp from '../../assets/img/WAMP.png';
import BamImage from '../../assets/img/bambooLogo.png';
import audit from '../../assets/img/auditBadge.jpg';
import HomeImage from '../../assets/img/background.jpg';
import useStatsForPool from '../../hooks/useStatsForPool';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import { getDisplayBalance } from '../../utils/formatBalance';
import { ReactComponent as IconTelegram } from '../../assets/img/telegram.svg';
import { ReactComponent as IconDiscord } from '../../assets/img/discord.svg';
import LaunchCountdown from '../../components/LaunchCountdown';
import { useGetEventQuery } from '../../services/event';
import { ILeaderBoard } from '../../interfaces/ILeaderBoard';
const BackgroundImage = createGlobalStyle`
  body {
    //background: url(${HomeImage}) repeat !important;
    background-size: cover !important;
    background-color: #171923;
  }
`;

// const BackgroundImage = createGlobalStyle`
//   body {
//     background-color: grey;
//     background-size: cover !important;
//   }
// `;

const useStyles = makeStyles(theme => ({
  button: {
    [theme.breakpoints.down('415')]: {
      // marginTop: '10px'
    },
  },
}));

const Compound = () => {
  const classes = useStyles();
  const TVL = useTotalValueLocked();
  const bammimLpStats = useLpStatsBTC('BAM-USDC-LP');
  const bSharemimLpStats = useLpStats('BDAO-USDC-LP');
  const newPair = useLpStats('BAM-BDAO-LP');
  const bamStats = useBamStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();
  const bamFinance = useBamFinance();
  const totalStaked = useTotalStakedOnBoardroom();

  const { data: eventResponse } = useGetEventQuery();
  const [leaderboard, setLeaderboard] = React.useState([]);
  React.useEffect(() => {
    if (eventResponse && eventResponse.result) {
      setLeaderboard(eventResponse.data.mixed);
    }
  }, [eventResponse]);

  let bam;
  let bShare;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production') {
    bam = bamTesting;
    bShare = bShareTesting;
  } else {
    bam = bamProd;
    bShare = bShareProd;
  }

  const buyBamAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E&outputCurrency=0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7';
  const buyBdaoAddress =
    'https://traderjoexyz.com/trade?inputCurrency=0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E&outputCurrency=0x83c7412931398502922a35911E5Fab221822f4B6';
  const compoundBamLp = 'https://magik.farm/#/avax/vault/bam-bam-usdc';
  const compoundBdaoLp = 'https://magik.farm/#/avax/vault/bam-bdao-usdc';
  const addBamBdaoLp =
    'https://traderjoexyz.com/pool/0x83c7412931398502922a35911E5Fab221822f4B6/0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7';

  const bdaoChart =
    'https://dexscreener.com/avalanche/0x0774F0acC4DD1CA84BC8521FEe6dC2f7D22f133f';
  const bamChart =
    'https://dexscreener.com/avalanche/0xbe7C737FCC2D6EBA0e4e73A073a0120171287769';
  const wampStaking = '/stake/WampStaking';

  const bamLPStats = useMemo(
    () => (bammimLpStats ? bammimLpStats : null),
    [bammimLpStats]
  );
  const bdaoLPStats = useMemo(
    () => (bSharemimLpStats ? bSharemimLpStats : null),
    [bSharemimLpStats]
  );
  const newPairLPStats = useMemo(() => (newPair ? newPair : null), [newPair]);

  const bamPriceInDollars = useMemo(
    () => (bamStats ? Number(bamStats.priceInDollars).toFixed(2) : null),
    [bamStats]
  );
  const bamPriceInAVAX = useMemo(
    () => (bamStats ? Number(bamStats.tokenInFtm).toFixed(2) : null),
    [bamStats]
  );
  const bamCirculatingSupply = useMemo(
    () => (bamStats ? String(bamStats.circulatingSupply) : null),
    [bamStats]
  );
  const bamTotalSupply = useMemo(
    () => (bamStats ? String(bamStats.totalSupply) : null),
    [bamStats]
  );

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats]
  );
  const bSharePriceInAVAX = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInmim).toFixed(6) : null),
    [bShareStats]
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats]
  );
  const bShareTotalSupply = useMemo(
    () => (bShareStats ? String(bShareStats.totalSupply) : null),
    [bShareStats]
  );

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats]
  );
  const tBondPriceInAVAX = useMemo(
    () => (tBondStats ? Number(tBondStats.tokenInmim).toFixed(4) : null),
    [tBondStats]
  );
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats]
  );
  const tBondTotalSupply = useMemo(
    () => (tBondStats ? String(tBondStats.totalSupply) : null),
    [tBondStats]
  );

  const bamTVL1 = useMemo(
    () => (newPair ? newPairLPStats.totalLiquidity / 2 : null),
    [newPair]
  );
  const bamTVL2 = useMemo(
    () => (bammimLpStats ? bammimLpStats.totalLiquidity / 2 : null),
    [bammimLpStats]
  );

  const shareLPTVL = useMemo(
    () => (bdaoLPStats ? bdaoLPStats.totalLiquidity / 2 : null),
    [bdaoLPStats]
  );

  const totalStakedFormat =
    Number(getDisplayBalance(totalStaked)) * bSharePriceInDollars;

  /*
  const bamLpZap = useZap({ depositTokenName: 'BAM-USDC-LP' });
  const bdaoLpZap = useZap({ depositTokenName: 'BDAO-USDC-LP' });

  const [onPresentBamZap, onDissmissBamZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bamLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBamZap();
      }}
      tokenName={'BAM-USDC-LP'}
    />,
  );

  const [onPresentBdaoZap, onDissmissBdaoZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bdaoLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBdaoZap();
      }}
      tokenName={'BDAO-USDC-LP'}
    />,
  );
*/
  return (
    <Page>
      <BackgroundImage />
      <h2
        style={{
          fontSize: '80px',
          textAlign: 'center',
          color: '#fff',
          marginBottom: '20px',
        }}
      >
        Compound
      </h2>
      <Grid container spacing={3} style={{ alignItems: 'center' }}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent align='center'>
              <h2>BAM-USDC LP</h2>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol='BAM-USDC-LP' />
                </CardIcon>
              </Box>
              <h5>
                This compounding is hosted on{' '}
                <a target='_blank' href='https://magik.farm'>
                  magik.farm
                </a>
              </h5>
              <Box mt={4} style={{ marginTop: '0px' }}>
                <Button
                  style={{}}
                  variant='contained'
                  color='primary'
                  target='_blank'
                  href={compoundBamLp}
                >
                  Invest
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent align='center'>
              <h2>BDAO-USDC LP</h2>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol='BDAO-USDC-LP' />
                </CardIcon>
              </Box>
              <h5>
                This compounding is hosted on{' '}
                <a target='_blank' href='https://magik.farm'>
                  magik.farm
                </a>
              </h5>
              <Box mt={4} style={{ marginTop: '0px' }}>
                <Button
                  variant='contained'
                  color='primary'
                  target='_blank'
                  href={compoundBdaoLp}
                >
                  Invest
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default Compound;
