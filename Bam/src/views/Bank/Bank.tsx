import React, {useEffect, useMemo} from 'react';
import styled from 'styled-components';

import {useParams} from 'react-router-dom';
import {useWallet} from 'use-wallet';
import {makeStyles} from '@material-ui/core/styles';

import {Box, Button, Card, CardContent, Typography, Grid} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Spacer from '../../components/Spacer';
import UnlockWallet from '../../components/UnlockWallet';
import Harvest from './components/Harvest';
import HarvestHermes from './components/HarvestHermes';
import Stake from './components/Stake';
import useBank from '../../hooks/useBank';
import useStatsForPartner from '../../hooks/useStatsForPartner';
import useStatsForPool from '../../hooks/useStatsForPool';

import useRedeem from '../../hooks/useRedeem';
import {Bank as BankEntity} from '../../bam-finance';
import useBamFinance from '../../hooks/useBamFinance';
import {Alert} from '@material-ui/lab';
import LaunchCountdown from '../../components/LaunchCountdown';
import Modal, {ModalProps} from '../../components/Modal';
import ModalActions from '../../components/ModalActions';
import ModalTitle from '../../components/ModalTitle';
import useModal from '../../hooks/useModal';
import StratModal from './components/StratModal';
import zone1 from '../../assets/img/1.jpg';
import zone2 from '../../assets/img/2.jpg';
import zone3 from '../../assets/img/3.jpg';
import wampStrat from '../../assets/img/wamp-strat.jpg';
import hermesStrat from '../../assets/img/hermes-strat.png';
import useCashPriceInLastTWAP from '../../hooks/useCashPriceInLastTWAP';
import usebShareStats from '../../hooks/useBdaoStats';
const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const Bank: React.FC = () => {
  useEffect(() => window.scrollTo(0, 0));
  const date = new Date('2022-1-31 12:00:00Z');
  const classes = useStyles();
  // @ts-ignore
  const {bankId} = useParams();
  const bank = useBank(bankId);

  const {account} = useWallet();
  const {onRedeem} = useRedeem(bank);
  const statsOnPool = useStatsForPool(bank);
  const bShareStats = usebShareStats();
  const cashPrice = useCashPriceInLastTWAP();

  const bondScale = (Number(cashPrice) / 1e18).toFixed(2); 
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );

  let curStrat: string;
  if (Number(bondScale) >= 2) {
    curStrat = zone1;
  } else if (Number(bondScale) < 2 && Number(bondScale) >= 1) {
    curStrat = zone2;
  } else {
    curStrat = zone3;
  }

  let name: string;
  let vaultUrl: string;
  let strat: string;
  let stratText: string;

  if (bank.depositTokenName.includes('BAM-USDC')) {
    name = 'Autocompound your BAM-USDC on Beefy here';
    vaultUrl = 'https://app.beefy.finance/#/avax/vault/bam-BAM-USDC';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('BDAO-USDC')) {
    name = 'Autocompound your BDAO-USDC on Beefy here';
    vaultUrl = 'https://app.beefy.finance/#/avax/vault/bam-BDAO-USDC';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName.includes('BAM-BDAO')) {
    name = 'Autocompound your BAM-BDAO on Yield Wolf here';
    vaultUrl = 'https://yieldwolf.finance/avalanche/bamfinance-bdao/92';
    strat = curStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName === 'BAM') {
    name = 'Autocompound your BAM on Yield Wolf here';
    vaultUrl = 'https://yieldwolf.finance/avalanche/bamfinance-bdao/142';
    strat = '';
    stratText = '';
  } else if (bank.depositTokenName === 'WAMP') {
    name = 'Get WAMP to stake for BDAO here';
    vaultUrl = 'https://app.asgarddao.fi/#/pledge';
    strat = wampStrat;
    stratText = 'Click here to see the optimal strategy for this vault';
  } else if (bank.depositTokenName === 'HSHARE-BDAO-LP') {
    name = 'Please Unstake';
    vaultUrl =
      '#';
    strat = hermesStrat;
    stratText = 'THIS POOL HAS ENDED PLEASE UNSTAKE';
  }

  const [onPresentDeposit, onDismissDeposit] = useModal(<StratModal strat={strat} />);

  return account && bank ? (
    <>
      <h2 style={{  textAlign:'center', color:'#fff', marginBottom: '20px' }}>{bank?.name}</h2>

      <Box >
        <Grid container justify="center" spacing={3} style={{marginBottom: '50px'}}>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>DAILY APR</Typography>
                <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            <Card className={classes.gridItem}>
              <CardContent style={{textAlign: 'center'}}>
                <Typography>TVL</Typography>
                <Typography>${statsOnPool?.TVL ? (Number((Number(statsOnPool?.TVL).toFixed(0)))).toLocaleString('en-US') : '-.--'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <StyledBank>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              {bank.depositTokenName === 'HSHARE-BDAO-LP' ? <HarvestHermes bank={bank} /> : <Harvest bank={bank} />}
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          {bank.depositTokenName.includes('LP') && <LPTokenHelpText bank={bank} />}
          <Spacer size="lg" />
          <div>
            <Button onClick={onRedeem} className="shinyButton">
              Claim &amp; Withdraw
            </Button>
          </div>
          <Spacer size="lg" />
        </StyledBank>
      </Box>
    </>
  ) : !bank ? (
    <BankNotFound />
  ) : (
    <UnlockWallet />
  );
};

const LPTokenHelpText: React.FC<{bank: BankEntity}> = ({bank}) => {
  const bamFinance = useBamFinance();

  let pairName: string;
  let uniswapUrl: string;
  let vaultUrl: string;
  let exchange: string;
  if (bank.depositTokenName.includes('BAM-USDC')) {
    pairName = 'BAM-USDC pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7';
    vaultUrl = '#';

    exchange = 'Trader Joe';
  } else if (bank.depositTokenName.includes('BDAO-USDC')) {
    pairName = 'BDAO-USDC pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E/0x83c7412931398502922a35911E5Fab221822f4B6';
    vaultUrl = '#';

    exchange = 'Trader Joe';
  } else if (bank.depositTokenName.includes('BAM-BDAO')) {
    pairName = 'BAM-BDAO pair';
    uniswapUrl =
      'https://traderjoexyz.com/pool/0x5cc339Aa2A582D857F38B85F662Ea3513706a1E7/0x83c7412931398502922a35911E5Fab221822f4B6';
    vaultUrl = '#';
    exchange = 'Trader Joe';
  } else if (bank.depositTokenName === 'HSHARE-BDAO-LP') {
    pairName = 'HSHARE-BDAO-LP';
    uniswapUrl =
      'https://app.pangolin.exchange/#/add/0xC55036B5348CfB45a932481744645985010d3A44/0x83c7412931398502922a35911E5Fab221822f4B6';
    vaultUrl = '#';
    exchange = 'Pangolin';
  }
  return (
    <Card>
      <CardContent>
        <StyledLink href={uniswapUrl} target="_blank">
          <span style={{color: '#000'}}>
            Provide liquidity for {pairName} on {exchange}
          </span>
        </StyledLink>
      </CardContent>
    </Card>
  );
};

const BankNotFound = () => {
  return (
    <Center>
      <PageHeader icon="🏚" title="Not Found" subtitle="You've hit a bank just robbed by unicorns." />
    </Center>
  );
};

const StyledBank = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const StyledLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: ${(props) => props.theme.color.primary.main};
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 600px;
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

const Center = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Bank;
