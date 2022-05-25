import React, { useState, useContext, useMemo } from 'react';
import {useParams} from 'react-router-dom';
import { useWallet } from 'use-wallet';
import PageHeader from '../../components/PageHeader';
import { Box, Button, Card, CardContent, Typography, Grid, MenuItem, Select, withStyles } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import Spacer from '../../components/Spacer';
import Harvest from './components/Harvest';
import Stake from './components/Stake';
import useNodeText from '../../hooks/useNodeText';
import useBank from '../../hooks/useBank';
import useNodes from '../../hooks/useNodes';
import useMaxPayout from '../../hooks/useMaxPayout';
import useUserDetails from '../../hooks/useUserDetails';
import totalNodes from '../../hooks/useTotalNodes';
import useStatsForPool from '../../hooks/useStatsForPool';
import {Context} from '../../contexts/BamFinanceProvider';
import useBamStats from '../../hooks/useBamStats';
import useStakedTokenPriceInDollars from '../../hooks/useStakedTokenPriceInDollars';

import {Alert} from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  gridItem: {
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '90px',
    },
  },
}));

const BamNode = () => {
  const { bankId } = useParams();
  
  const bank = useBank(bankId);
  const { getNodeText } = useNodeText();
  const { account } = useWallet();

  const classes = useStyles();
  const [poolId, setPoolId] = useState(0);
  const LOCK_ID = 'LOCK_ID';
  const statsOnPool = useStatsForPool(bank);
  const {bamFinance} = useContext(Context);
  const nodes = useNodes(bank?.contract, bank?.sectionInUI, account);
  const total = totalNodes(bank?.contract, bank?.sectionInUI);
  const max = useMaxPayout(bank?.contract, bank?.sectionInUI, account);
  const userDetails = useUserDetails(bank?.contract, bank?.sectionInUI, account);
  const stakedTokenPriceInDollars = useStakedTokenPriceInDollars(bank.depositTokenName, bank.depositToken);

  const tokenPriceInDollars = useMemo(
    () => (stakedTokenPriceInDollars ? stakedTokenPriceInDollars : null),
    [stakedTokenPriceInDollars],
  );

  return bank
  ? (
      <>
        <h2 style={{  textAlign:'center', color:'#fff' }}>{bank?.name}</h2>
        {/* <Button onClick={setTierValues}>Set Tier Values</Button> */}
        <Box>
        {/* <Alert variant="filled" severity="info">
                    Please read our <a target={'_blank'} href="https://bamfinance.gitbook.io/bam-finance-docs/unique-features/locked-staking-bam-nodes" >Node Docs & Strategy</a> in order to fully understand how our node pools work before purchasing. Sticking to the current strategy helps support the protocol which in turn helps you to continue to earn rewards!
                  </Alert> */}
          <Grid container justify="center" spacing={2} style={{marginBottom: '50px', marginTop: '20px'}}>
          
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
            
                <Card className={classes.gridItem}>
                  <CardContent style={{ textAlign: 'center' }}>
                    <Typography>Your Nodes | TVL</Typography>
                    <Typography>
                      {
                        nodes[0] &&
                        <>
                          <b style={{ color: 'rgb(0, 0, 0)', marginRight: '0px' }}>
                            {nodes[0].toString()}
                          </b> |  <b style={{ color: 'rgb(0, 0, 0)', marginRight: '0px' }}>
                            ${bank.depositTokenName === 'BAM' ? (nodes[0] * (tokenPriceInDollars*100)).toFixed(0) : (nodes[0] * (tokenPriceInDollars)).toFixed(0)}
                           
                          </b>
                          
                        </>
                      }
                    </Typography>
                  </CardContent>
                </Card>
         
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography>Amount Claimed</Typography>
                  <Typography>{(Number(userDetails.total_claims)/1e18).toFixed(2)} {bank.earnTokenName}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography>Max Possible Pay</Typography>
                  <Typography>{Number(max)/1e18} {bank.earnTokenName}</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography>APR | Daily</Typography>
                  <Typography>{bank.closedForStaking ? '0.00' : statsOnPool?.yearlyAPR}% | {bank.closedForStaking ? '0.00' : statsOnPool?.dailyAPR}%</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={2} lg={2} className={classes.gridItem}>
              <Card className={classes.gridItem}>
                <CardContent style={{textAlign: 'center'}}>
                  <Typography>Total {bank.earnTokenName} Nodes</Typography>
                  <Typography>{Number(total[0])}</Typography>
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
                <Harvest bank={bank} />
              </StyledCardWrapper>
              <Spacer />
              <StyledCardWrapper>{<Stake bank={bank} />}</StyledCardWrapper>
            </StyledCardsWrapper>
            <Spacer size="lg" />
          </StyledBank>
        </Box>
      </>
    )
  : <BankNotFound/>
};

const LPTokenHelpText = ({bank}) => {
  // const bamFinance = useBamFinance();

  // let pairName: string;
  // let uniswapUrl: string;
  // let vaultUrl: string;
  // let exchange: string;
  // if (bank.depositTokenName.includes('BAM-USDC')) {
  //   pairName = 'BAM-USDC pair';
  //   uniswapUrl =
  //     'https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0x5541d83efad1f281571b343977648b75d95cdac2';
  //   vaultUrl = '#';

  //   exchange = 'joe';
  // } else if (bank.depositTokenName.includes('BDAO-USDC')) {
  //   pairName = 'BDAO-USDC pair';
  //   uniswapUrl =
  //     'https://traderjoexyz.com/pool/0x130966628846bfd36ff31a822705796e8cb8c18d/0xc55036b5348cfb45a932481744645985010d3a44';
  //   vaultUrl = '#';

  //   exchange = 'joe';
  // } else if (bank.depositTokenName.includes('BAM-BDAO')) {
  //   pairName = 'BAM-BDAO pair';
  //   uniswapUrl =
  //     'https://traderjoexyz.com/pool/0x5541d83efad1f281571b343977648b75d95cdac2/0xc55036b5348cfb45a932481744645985010d3a44';
  //   vaultUrl = '#';
  //   exchange = 'joe';
  // } else if (bank.depositTokenName === 'HSHARE-BDAO-LP') {
  //   pairName = 'HSHARE-BDAO-LP';
  //   uniswapUrl =
  //     'https://app.pangolin.exchange/#/add/0xC55036B5348CfB45a932481744645985010d3A44/0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2';
  //   vaultUrl = '#';
  //   exchange = 'Pangolin';
  // }
  return (
    <Card>
      <CardContent>
        <StyledLink href={'#'} target="_blank">
          <span style={{color: '#000'}}>
            Provide liquidity for {'pairname'} on {'exchange'}
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

const StyledOutline = styled.div`
  background: #1d48b6;
  background-size: 300% 300%;
  border-radius: 0px;
  filter: blur(8px);
  position: absolute;
  top: -6px;
  right: -6px;
  bottom: -6px;
  left: -6px;
  z-index: -1;
`;

const StyledOutlineWrapper = styled.div`    
    position: relative;
    background: #08090d;
    border-radius: 0px;
    box-shadow: 0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)
`;

const StyledMenuItem = withStyles({
  root: {
    backgroundColor: 'white',
    color: '#2c2560',
    '&:hover': {
      backgroundColor: 'grey',
      color: '#2c2560',
    },
    selected: {
      backgroundColor: 'black',
    },
  },
})(MenuItem);

export default BamNode;