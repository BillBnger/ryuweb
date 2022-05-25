import React, {useMemo} from 'react';
import Page from '../../components/Page';
import {createGlobalStyle} from 'styled-components';
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
import {Bam as bamTesting, Bdao as bShareTesting} from '../../bam-finance/deployments/deployments.testing.json';
import {Bam as bamProd, Bdao as bShareProd} from '../../bam-finance/deployments/deployments.mainnet.json';
import {roundAndFormatNumber} from '../../0x';
import MetamaskFox from '../../assets/img/metamask-fox.svg';
import {Box, Button, Card, CardContent, Grid, Paper} from '@material-ui/core';
import ZapModal from '../Bank/components/ZapModal';
import {Alert} from '@material-ui/lab';
import useBank from '../../hooks/useBank';
import {makeStyles} from '@material-ui/core/styles';
import useBamFinance from '../../hooks/useBamFinance';
import kyc from '../../assets/img/kyc.jpg';
import wamp from '../../assets/img/WAMP.png';
import BamImage from '../../assets/img/bambooLogo.png';
import audit from '../../assets/img/auditBadge.jpg';
import HomeImage from '../../assets/img/background.jpg';
import useStatsForPool from '../../hooks/useStatsForPool';
import useTotalStakedOnBoardroom from '../../hooks/useTotalStakedOnBoardroom';
import {getDisplayBalance} from '../../utils/formatBalance';
import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';
import LaunchCountdown from '../../components/LaunchCountdown';
import { useGetEventQuery } from '../../services/event';
import {ILeaderBoard} from '../../interfaces/ILeaderBoard'
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

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down('415')]: {
      // marginTop: '10px'
    },
  },
}));

const Home = () => {
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

  const {data : eventResponse} = useGetEventQuery();
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
  const addBamLp = 'https://traderjoexyz.com/pool/0x5cc339aa2a582d857f38b85f662ea3513706a1e7/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e'
  const addBdaoLp = 'https://traderjoexyz.com/pool/0x83c7412931398502922a35911e5fab221822f4b6/0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e'
  const addBamBdaoLp = 'https://traderjoexyz.com/pool/0x83c7412931398502922a35911E5Fab221822f4B6/0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7'

  const bdaoChart = 'https://dexscreener.com/avalanche/0x0774F0acC4DD1CA84BC8521FEe6dC2f7D22f133f';
  const bamChart = 'https://dexscreener.com/avalanche/0xbe7C737FCC2D6EBA0e4e73A073a0120171287769';
  const wampStaking = '/stake/WampStaking';

  const bamLPStats = useMemo(() => (bammimLpStats ? bammimLpStats : null), [bammimLpStats]);
  const bdaoLPStats = useMemo(() => (bSharemimLpStats ? bSharemimLpStats : null), [bSharemimLpStats]);
  const newPairLPStats = useMemo(() => (newPair ? newPair : null), [newPair]);

  const bamPriceInDollars = useMemo(
    () => (bamStats ? Number(bamStats.priceInDollars).toFixed(2) : null),
    [bamStats],
  );
  const bamPriceInAVAX = useMemo(() => (bamStats ? Number(bamStats.tokenInFtm).toFixed(2) : null), [bamStats]);
  const bamCirculatingSupply = useMemo(
    () => (bamStats ? String(bamStats.circulatingSupply) : null),
    [bamStats],
  );
  const bamTotalSupply = useMemo(() => (bamStats ? String(bamStats.totalSupply) : null), [bamStats]);

  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInAVAX = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInmim).toFixed(6) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInAVAX = useMemo(() => (tBondStats ? Number(tBondStats.tokenInmim).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);

  const bamTVL1 = useMemo(() => (newPair ? newPairLPStats.totalLiquidity / 2 : null), [newPair]);
  const bamTVL2 = useMemo(() => (bammimLpStats ? bammimLpStats.totalLiquidity / 2 : null), [bammimLpStats]);

  const shareLPTVL = useMemo(() => (bdaoLPStats ? bdaoLPStats.totalLiquidity / 2 : null), [bdaoLPStats]);

  const totalStakedFormat = Number(getDisplayBalance(totalStaked)) * bSharePriceInDollars;

  const bamLpZap = useZap({ depositTokenName: 'BAM-USDC-LP' });
  const bdaoLpZap = useZap({ depositTokenName: 'BDAO-USDC-LP' });
  const bambdaoLpZap = useZap({ depositTokenName: 'BAM-BDAO-LP' });

  const [onPresentBamZap, onDissmissBamZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bamLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBamZap();
      }}
      LPtokenName={'BAM-USDC-LP'}
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
      LPtokenName={'BDAO-USDC-LP'}
    />,
  );
  const [onPresentBamBdaoZap, onDissmissBamBdaoZap] = useModal(
    <ZapModal
      decimals={18}
      onConfirm={(zappingToken, tokenName, amount) => {
        if (Number(amount) <= 0 || isNaN(Number(amount))) return;
        bambdaoLpZap.onZap(zappingToken, tokenName, amount);
        onDissmissBamBdaoZap();
      }}
      LPtokenName={'BAM-BDAO-LP'}
    />,
  );

  return (
    <Page>
      <BackgroundImage />
      <Grid item xs={12} sm={12} style={{marginBottom: '25px'}}>
      </Grid>
      <Grid container spacing={3}>

        {/* Logo */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{display: 'flex', justifyContent: 'center', verticalAlign: 'middle', overflow: 'hidden'}}
        >
          <img src={BamImage} style={{maxHeight: '240px'}} />
          
        </Grid>
        {/* Explanation text */}
        <Grid item xs={12} sm={8}>
          <Paper>
            <Box p={4} style={{ textAlign: 'center'}}>
              <h2>Earn Daily Yields at Bamboo Finance</h2>

              <p style={{fontSize: '17px'}}>
                <b>We're pegged to USDC helping to reduce your volatility during a market downturn</b>
              </p>
              <p style={{fontSize: '17px'}}>
                BAM is an algorithmic stable coin designed to maintain a 1:1 peg to USDC.
                {/*Stake your LPs in the Vineyard to earn BDAO rewards. Then stake your earned BDAO in the
                Boardroom to earn more BAM!*/}
              </p>
              {/* <p>
                Please join our{' '}
                <a href="https://t.me/BamDefi" rel="noopener noreferrer" target="_blank" style={{color: '#000'}}>
                <b> <IconTelegram style={{fill: '#000', height: '15px'}} />Telegram</b>
                </a>{' '}
                or{' '}
                <a
                  href="https://discord.gg/ZP9aYaXeCJ"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color: '#000'}}
                >
                 <b><IconDiscord style={{fill: '#000', height: '15px'}} /> Discord</b>
                </a>{' '}
                & read our{' '}
                <a
                  href="https://bamfinance.gitbook.io/bam-finance-docs/"
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{color: '#000'}}
                >
                 <b>  Docs & Disclaimer</b>
                </a>{' '}
                before joining!
              </p> */}
            </Box>
          </Paper>
          
        </Grid>
        
        {/* <Grid container spacing={3}>
          <Grid item xs={12} sm={12} justify="center" style={{ margin: '12px', display: 'flex' }}>

           <Alert variant="filled" severity="info"> 
              Reward Pools have launched! Please read our <a link="_blank" href="https://bamfinance.gitbook.io/bam-finance-docs/">docs</a> for more info and to confirm contract addresses.
            </Alert>

          </Grid>
              </Grid>*/}

        {/* TVL */}
        <Grid item xs={12} sm={4}>
          
          <Card>
            <CardContent align="center">
              <h2>Total Value Locked</h2>
             
              <CountUp style={{fontSize: '30px'}} end={TVL} separator="," prefix="$" />
            </CardContent>
          </Card>
        </Grid>
        
        {/* Wallet */}
        <Grid item xs={12} sm={8}>
          <Card style={{height: '100%'}}>
            <CardContent align="center" style={{marginTop: '5%'}}>
              {/* <Box p={4} style={{textAlign: 'center', paddingTop: '0px'}}>
                <h2 style={{fontSize: '32px'}}>Have WAMP to stake?</h2>
                <p style={{marginTop: '0'}}>Boost your WAMP yields by staking for BDAO then pledge for more AMP</p>

                <img src={wamp} width={'55px'} height={'55px'}></img>
                <Button
                  target="_blank"
                  href={wampStaking}
                  variant="contained" color="primary"
                  style={{marginLeft: '10px', marginTop: '-45px'}}
                >
                  WAMP Staking
                </Button>
              </Box> */}
              {/* <h2 style={{ marginBottom: '20px' }}>Wallet Balance</h2> */}
              {/* <Button href="/stake" variant="contained" color="primary" style={{margin: '10px'}}>
                Stake
              </Button>
              <Button href="/boardroom" variant="contained" color="primary" style={{margin: '10px'}}>
                Boardroom
              </Button>   */}
              <Button
                target="_blank"
                href={buyBamAddress}
                variant="contained" color="primary"
              >
                Buy BAM
              </Button>
              <Button
                target="_blank"
                href={buyBdaoAddress}
                variant="contained" color="primary"
                style={{marginLeft: '10px'}}
              >
                Buy BDAO
              </Button>

              <Button
                target="_blank"
                href={bamChart}
                variant="contained" color="primary"
                style={{marginLeft: '10px'}}
              >
                BAM Chart
              </Button>
              <Button
                target="_blank"
                href={bdaoChart}
                variant="contained" color="primary"
                style={{marginLeft: '10px'}}
              >
                BDAO Chart
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        {/* BAM */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{position: 'relative'}}>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BAM" />
                </CardIcon>
              </Box>
              <Button
                onClick={() => {
                  bamFinance.watchAssetInMetamask('BAM');
                }}
                style={{position: 'absolute', top: '10px', right: '10px', border: '1px #44a742 solid', color: '#44a742'}}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{width: '20px'}} src={MetamaskFox} />
              </Button>
              <h2 style={{marginBottom: '10px'}}>BAM</h2>

              <Box>
                <span style={{fontSize: '30px', color: '#44a742'}}>
                  ${bamPriceInAVAX ? bamPriceInAVAX : '-.----'}{' '}
                </span>
              </Box>
              <span style={{fontSize: '17px'}}>
                {/*TVL In LPs: ${roundAndFormatNumber(bamTVL1 + bamTVL2, 0)}
                <br />*/}
                Market Cap: ${roundAndFormatNumber(bamCirculatingSupply * bamPriceInDollars, 0)} <br />
                Circulating Supply: {roundAndFormatNumber(bamCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bamTotalSupply, 2)}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BDAO */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{position: 'relative'}}>
              <Button
                onClick={() => {
                  bamFinance.watchAssetInMetamask('BDAO');
                }}
                style={{position: 'absolute', top: '10px', right: '10px', border: '1px #44a742 solid', color: '#44a742'}}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{width: '20px'}} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BDAO" />
                </CardIcon>
              </Box>
              <h2 style={{marginBottom: '10px'}}>BDAO</h2>

              <Box>
                <span style={{fontSize: '30px', color: '#44a742'}}>
                  ${bSharePriceInDollars ? bSharePriceInDollars : '-.--'}
                </span>
              </Box>

              <span style={{fontSize: '17px'}}>
               {/* TVL In LPs & Boardroom: ${roundAndFormatNumber(shareLPTVL + totalStakedFormat, 0)}
                <br />*/}
                Market Cap: ${roundAndFormatNumber(bShareCirculatingSupply * bSharePriceInDollars, 0)} <br />
                Circulating Supply: {roundAndFormatNumber(bShareCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(bShareTotalSupply, 2)}
              </span>
            </CardContent>
          </Card>
        </Grid>

        {/* BBOND */}
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center" style={{position: 'relative'}}>
              <Button
                onClick={() => {
                  bamFinance.watchAssetInMetamask('BBOND');
                }}
                style={{position: 'absolute', top: '10px', right: '10px', border: '1px #44a742 solid', color: '#44a742'}}
              >
                {' '}
                <b>+</b>&nbsp;&nbsp;
                <img alt="metamask fox" style={{width: '20px'}} src={MetamaskFox} />
              </Button>
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BBOND" />
                </CardIcon>
              </Box>
              <h2 style={{marginBottom: '10px'}}>BBOND</h2>

              <Box>
                <span style={{fontSize: '30px', color: '#44a742'}}>
                  ${tBondPriceInDollars ? tBondPriceInDollars : '-.--'}
                </span>
              </Box>
              <span style={{fontSize: '17px'}}>
                Market Cap: ${roundAndFormatNumber(tBondCirculatingSupply * tBondPriceInDollars, 0)} <br />
                Circulating Supply: {roundAndFormatNumber(tBondCirculatingSupply, 2)} <br />
                Total Supply: {roundAndFormatNumber(tBondTotalSupply, 2)}
                <br />
              </span>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BAM-USDC-LP" />
                </CardIcon>
              </Box>
              <h2>BAM-USDC LP</h2>

              <Box mt={4} style={{marginTop: '0px'}}>
                <Button onClick={onPresentBamZap} variant="contained" color="primary" >
                  Zap In
            </Button>
                <Button style={{marginLeft:'10px'}} variant="contained" color="primary" target="_blank" href={addBamLp}>
                  Add To Liquidity Pool
                </Button>
              </Box>

              <Box mt={2}>
                <span style={{fontSize: '26px', color: '#44a742'}}>
                  {bamLPStats?.tokenAmount ? bamLPStats?.tokenAmount : '-.--'} BAM /{' '}
                  {bamLPStats?.mimAmount ? bamLPStats?.mimAmount : '-.--'} USDC
                </span>
              </Box>
              <Box>${bamLPStats?.priceOfOne ? bamLPStats.priceOfOne : '-.--'}</Box>
              <span style={{fontSize: '17px'}}>
                Liquidity: $
                {bamLPStats?.totalLiquidity ? roundAndFormatNumber(bamLPStats.totalLiquidity, 0) : '-.--'} <br />
                Total Supply: {bamLPStats?.totalSupply ? roundAndFormatNumber(bamLPStats.totalSupply, 12) : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BDAO-USDC-LP" style="width:105px;" />
                </CardIcon>
              </Box>
              <h2>BDAO-USDC LP</h2>

              <Box mt={2} style={{marginTop: '0px'}}>
                <Button onClick={onPresentBdaoZap} variant="contained" color="primary">
                  Zap In
            </Button>
                <Button style={{marginLeft:'10px'}} variant="contained" color="primary" target="_blank" href={addBdaoLp}>
                  Add to Liquidity Pool
                </Button>
              </Box>
              <Box mt={2}>
                <span style={{fontSize: '26px', color: '#44a742'}}>
                  {bdaoLPStats?.tokenAmount ? bdaoLPStats?.tokenAmount : '-.--'} BDAO /{' '}
                  {bdaoLPStats?.mimAmount ? bdaoLPStats?.mimAmount : '-.--'} USDC
                </span>
              </Box>
              <Box>${bdaoLPStats?.priceOfOne ? bdaoLPStats.priceOfOne : '-.--'}</Box>
              <span style={{fontSize: '17px'}}>
                Liquidity: ${bdaoLPStats?.totalLiquidity ? roundAndFormatNumber(bdaoLPStats.totalLiquidity, 0) : '-.--'}
                <br />
                Total Supply: {bdaoLPStats?.totalSupply ? roundAndFormatNumber(bdaoLPStats.totalSupply, 12) : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid>
        {/* <Grid item xs={12} sm={4}>
          <Card>
            <CardContent align="center">
              <Box mt={2}>
                <CardIcon>
                  <TokenSymbol symbol="BAM-BDAO-LP" style="width:105px;" />
                </CardIcon>
              </Box>
              <h2>BAM-BDAO LP</h2>

              <Box mt={2} style={{marginTop: '0px'}}>
                {/* <Button onClick={onPresentBamBdaoZap} variant="contained" color="primary">
                  Zap In
                </Button> 
                <Button style={{marginLeft:'10px'}} variant="contained" color="primary" href={addBamBdaoLp}>
                  Add to Liquidity Pool
                </Button>
              </Box>
              <Box mt={2}>
                <span style={{fontSize: '26px', color: '#44a742'}}>
                  {newPairLPStats?.tokenAmount ? newPairLPStats?.tokenAmount : '-.--'} BAM /{' '}
                  {newPairLPStats?.mimAmount ? newPairLPStats?.mimAmount : '-.--'} BDAO
                </span>
              </Box>
              <Box>${newPairLPStats?.priceOfOne ? newPairLPStats.priceOfOne : '-.--'}</Box>
              <span style={{fontSize: '17px'}}>
                Liquidity: $
                {newPairLPStats?.totalLiquidity ? roundAndFormatNumber(newPairLPStats.totalLiquidity, 0) : '-.--'}
                <br />
                Total Supply:{' '}
                {newPairLPStats?.totalSupply ? roundAndFormatNumber(newPairLPStats.totalSupply, 0) : '-.--'}
              </span>
            </CardContent>
          </Card>
        </Grid> */}
      </Grid>
    </Page>
  );
};

export default Home;
