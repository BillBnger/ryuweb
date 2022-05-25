import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Container, Grid, Typography, Link} from '@material-ui/core';

import {ReactComponent as IconTelegram} from '../../assets/img/telegram.svg';
import {ReactComponent as IconTwitter} from '../../assets/img/twitter.svg';
import {ReactComponent as IconGithub} from '../../assets/img/github.svg';
import {ReactComponent as IconDiscord} from '../../assets/img/discord.svg';


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

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body2" color="#" align="left">
              {'Copyright © '}
              <Link color="inherit" href="/">
                Bamboo Finance
              </Link>{' '}
              {new Date().getFullYear()}
            </Typography>
          </Grid>
          <Grid item xs={12} style={{textAlign: 'right', height: '20px'}}>
          {/*<a
              href="mailto:bamfinance@protonmail.com"
              rel="noopener noreferrer"
              target="_blank"
              className={'navLink ' + classes.link}
            >
              Email
  </a>*/}
          {/* <a
              href="https://bamfinance.gitbook.io/bam-finance-docs/"
              rel="noopener noreferrer"
              target="_blank"
              className={'navLink ' + classes.link}
            >
              Bam Docs
            </a> */}
            
            <a
              href="https://twitter.com/bamboo_fi"
              rel="noopener noreferrer"
              target="_blank"
              className={classes.link}
            >
              <IconTwitter style={{fill: '#fff'}} />
            </a>
            {/* <a href="https://github.com/bamfi/contracts" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconGithub style={{fill: '#fff', height: '20px'}} />
              </a> */}
            {/* <a href="https://t.me/BamDefi" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconTelegram style={{fill: '#fff', height: '20px'}} />
            </a> */}
            <a href="https://discord.gg/CwZQWVDuJe" rel="noopener noreferrer" target="_blank" className={classes.link}>
              <IconDiscord style={{fill: '#fff', height: '20px'}} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
