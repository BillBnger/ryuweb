import React, {useMemo, useEffect} from 'react';
import clsx from 'clsx';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@material-ui/core';

import ListItemLink from '../ListItemLink';
import useBamStats from '../../hooks/useBamStats';
import useBtcStats from '../../hooks/useBtcStats';
import useShareStats from '../../hooks/useBdaoStats';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AccountButton from './AccountButton';

import bamLogo from '../../assets/img/logo1.png';
import auditBadge from '../../assets/img/auditBadge.jpg';
import {roundAndFormatNumber} from '../../0x';
import TokenSymbol from '../TokenSymbol';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    color: '#322f32',
    'background-color': 'rgba(255,255,255,0.0) !important',
    // borderBottom: `1px solid ${theme.palette.divider}`,
    padding: '10px',
    marginBottom: '3rem',
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  hide: {
    display: 'none',
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    fontFamily: 'Rubik',
    fontSize: '0px',
    flexGrow: 1,
  },
  link: {
    textTransform: 'uppercase',
    color: '#322f32',
    fontSize: '16px',
    marginTop: '15px',
    margin: theme.spacing(10, 1, 1, 2),
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
  brandLink: {
    textDecoration: 'none',
    color: '#322f32',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}));

const Nav = () => {
  const matches = useMediaQuery('(min-width:900px)');
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  //const bamStats = useBamStats();
  //const btcStats = useBtcStats();
  //const shareStats = useShareStats();

  const [connected, setConnected] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //const btcPriceInDollars = useMemo(() => (bamStats ? Number(btcStats).toFixed(2) : null), [bamStats]);
  /*const bamPriceInDollars = useMemo(
    () => (bamStats ? Number(bamStats.priceInDollars).toFixed(2) : null),
    [bamStats],
  );
  const sharePriceInDollars = useMemo(
    () => (bamStats ? Number(shareStats.priceInDollars).toFixed(2) : null),
    [bamStats],
  );
*/
  return (
    <AppBar position="sticky" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {matches ? (
          <>
            <Typography variant="h6" color="inherit" noWrap style={{flexGrow: '0'}} className={classes.toolbarTitle}>
              {/* <a className={ classes.brandLink } href="/">Bam Money</a> */}
              <Link to="/" color="inherit" className={classes.brandLink}>
                <img alt="Bamboo Finance" src={bamLogo} height="60px" />
              </Link>
            </Typography>
            <Box style={{paddingLeft: '15px', paddingTop: '10px', fontSize: '1rem', flexGrow: '1'}}>
              <Link to="/" className={'navLink ' + classes.link}>
                Home
              </Link>

              <Link to="/stake" className={'navLink ' + classes.link}>
                Stake
              </Link>
              <Link to="/Boardroom" className={'navLink ' + classes.link}>
                Boardroom
              </Link>
              <Link to="/nodes" className={'navLink ' + classes.link}>
                 Nodes
              </Link>
              {/* <Link to="/leaderboard" className={'navLink ' + classes.link}>
                 Leaderboard
              </Link>
              <a
                href="https://shop.bamfinance.app/"
                className={'navLink ' + classes.link}
                rel="noopener"
                target="_blank"
              >
                Merch
              </a> */}
              <Link to="/bond" className={'navLink ' + classes.link}>
                Bonds
              </Link>
              <Link to="/compound" className={'navLink ' + classes.link}>
                Compound
              </Link>
              {/* <Link to="/strategies" className={'navLink ' + classes.link}>
                Strategy
              </Link>
              <Link to="/stats" className={'navLink ' + classes.link}>
                 Stats
              </Link>
              <Link to="/raffle" className={'navLink ' + classes.link}>
                Raffle
              </Link> */}
              {/*<Link to="/launchpad" className={'navLink ' + classes.link}>
                Launchpad
              </Link>*/}
              
              {/* <Link to="/roadmap" className={'navLink ' + classes.link}>
                Roadmap
              </Link>
              <a
                href="https://app.beefy.finance/#/"
                className={'navLink ' + classes.link}
                rel="noopener"
                target="_blank"
              >
                Beefy
              </a>
              <a
                href="https://yieldwolf.finance/avalanche"
                className={'navLink ' + classes.link}
                rel="noopener"
                target="_blank"
              >
                Yield Wolf
              </a> */}
              <a
                href="https://snapshot.org/#/bamboofinance.eth"
                className={'navLink ' + classes.link}
                rel="noopener"
                target="_blank"
              >
                Voting
            </a>
              <a
                href="https://bamboo-finance.gitbook.io/bamboo-finance-official-docs/"
                className={'navLink ' + classes.link}
                rel="noopener"
                target="_blank"
              >
                Docs
              </a>
              {/* <Link to="/help" className={'navLink ' + classes.link}>
                Help
              </Link> */}
            </Box>

              <a target="_blank" href="https://www.bamboofinance.info/_files/ugd/ffe5e9_f50f5b3e357140b39a7e93d44c23222b.pdf" style={{marginRight:'20px'}}>
                <img alt="Bamboo Finance" src={auditBadge} height="48px" />
              </a>
            <AccountButton text="Connect" />
          </>
        ) : (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>

            <img
              alt="bam.money"
              src={bamLogo}
              style={{height: '40px', marginTop: '-10px', marginLeft: '10px', marginRight: '15px'}}
            />
            <AccountButton text="Connect" />
            <Drawer
              className={classes.drawer}
              onClose={handleDrawerClose}
              // onEscapeKeyDown={handleDrawerClose}
              // onBackdropClick={handleDrawerClose}
              variant="temporary"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'rtl' ? (
                    <ChevronRightIcon htmlColor="white" />
                  ) : (
                    <ChevronLeftIcon htmlColor="white" />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  <AccountButton text="Connect" />
                </ListItem>
                <ListItemLink primary="Home" to="/" />
                <ListItemLink primary="Stake" to="/stake" />
                <ListItemLink primary="Boardroom" to="/boardroom" />
                <ListItemLink primary="Bond" to="/bond" />
                <ListItemLink primary="Nodes" to="/nodes" />
                <ListItemLink primary="Compound" to="/compound" />
                
                <ListItem button component="a" href="https://snapshot.org/#/bamboofinance.eth">
                  <ListItemText>Voting</ListItemText>
                </ListItem>
                
                <ListItem button component="a" href="https://bamboo-finance.gitbook.io/bamboo-finance-official-docs/">
                  <ListItemText>Docs</ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;
