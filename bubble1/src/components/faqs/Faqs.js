import * as React from 'react';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Container, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
const ee24 = ['./images/graphics/ee24.png'];

const accordList = [
  {
    title: 'HOW MANY NFTS WILL BE AVAILABLE ON TOTAL?',
    description:
      'The total supply is 5.000 but 100 of them will be held by the team for Marketing purposes. About the release, 3.000 will be launched on Pre-Sale and 2.000 will be available for Public Mint through a Raffle Process.',
  },
  {
    title: 'WHY SHOULD I TRY TO GET WHITELISTED?',
    description:
      "By having Whitelist, you will have a much better chance of buying your NFTs. Moreover, you will be able to do it before most of the members. The price of the Whitelist Mint will also be lower than the price at the Raffle Mint. Not to mention the Gas War you would be able to avoid. That'd also save you some money.",
  },
  {
    title: 'HOW MANY SPOTS ARE AVAILABLE FOR PRE-SALE/WHITELIST?',
    description:
      'Only 1.500 spots will be available. Each one will have the opportunity to Mint 1-2 NFTs. With a 24 Hours limit to Mint, everyone who has been Whitelisted is guaranteed to get their NFTs. This way, Gas Wars will be avoided. If someone decides to only Mint 1 or not to Mint at all (despite being Whitelisted), their NFTs will be added to the "Public Mint" (Raffle).',
  },
  {
    title: 'HOW CAN I GET WHITELISTED? ',
    description:
      'Being Whitelisted is very simple. We want to reward the ones who deserve it and those who really want to be part of our community. This includes: Discord chat activity (no levels, hand selected), consistent efforts, changing your PFP/username on your social media, creating content at our Discord Server, participating in mini games/contests/quizzes/etc. You will know you got it by having the role “Whitelisted” at our Discord Server. Before the Mint, we will unlock a Hidden Channel to collect your Addresses.',
  },
  {
    title: 'IS MY WHITELIST ROLE PERMANENT? ',
    description:
      'No. We reserve the rights to change your role for any given reasons. For example, it will be removed if you break our rules.',
  },
  {
    title: 'WHAT’S THE WHITELIST MINT PRICE/DATE? ',
    description:
      'TBA. 24 hours prior to Raffle and 48 hours prior to Public Mint. Everyone will be notified ahead of the Whitelist Mint Date through our Discord Server.',
  },
  {
    title: 'HOW’S THE PUBLIC MINT HAPPENING?',
    description:
      'The Public Mint will be made through a Raffle. The Raffle will open 24 hours after the Whitelist Mint. Raffle results will be announced 24 hours later (48 hours after Whitelist Mint) and the Public Mint will automatically begin (only for the people who get randomly selected).',
  },
  {
    title: 'HOW MANY CAN I MINT IF I GET SELECTED BY THE RAFFLE?',
    description:
      'Each selected person will be able to Mint only 1 NFT. First come first served.',
  },
  {
    title:
      'HOW CAN I MINT A BUBBLE FACTION NFT IF I DON’T GET SELECTED BY THE RAFFLE?',
    description:
      "Basically, you can't. On the other hand, you can still get a Bubble Faction NFT through OpenSea. Be aware: only use our official links.",
  },
  {
    title: "WHEN'S THE RAFFLE HAPPENING? AND WHAT'S THE MINT DATE? ",
    description: 'Raffle Date: TBA. Mint Date: TBA.',
  },
  {
    title: 'WHY DID YOU CHOOSE THESE BUBBLY CHARACTERS?',
    description:
      'When we created Bubble Faction, the team was looking for a realistic way to embody human features. After many discussions, we ended up agreeing on the fact that there was no better, funnier and smarter way to do that than this one.',
  },
  {
    title: 'WHAT ARE THE BUBBLE LEGENDS?',
    description:
      'The Bubble Legends are the rarest NFTs of the Bubble Faction collection. Holding one of them (by lucky mint or through secondary market) opens the doors to many advantages and rewards. There will be only 10 and they will be considered as VIP members of the community.',
  },
  {
    title: 'TELL ME MORE ABOUT THE MONTHLY INCOME FOR THE HOLDERS OF LEGENDS.',
    description:
      'Every Bubble Legend holder will be rewarded 500$ per month for 3 straight years. How will it technically work out for the $500? What happens if the ETH loses its value? How do you guarantee it? Technically, before the launch (as soon as we have the IDs of each image), a second smart contract will be set up with a function automating a transfer of $500 (converted into ETH each month) to each OWNER address of a Bubble Legend.',
  },
  {
    title: 'WHY DO YOU NEED ROYALTIES? ',
    description:
      'The amount of royalties was fixed at 7.5% to finance the future LEFT2DROP’s projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests. The funds collected will definitely benefit the holders. This percentage can also decrease over time.',
  },
  {
    title:
      " I'VE BEEN OFFERED A MINTING OPPORTUNITY (PRE-SALE/RAFFLE) BY DM. IS THIS LEGIT? ",
    description:
      '100% SCAM. We will never DM you. If that happens to you, let us know.',
  },
  {
    title:
      "I'M AN INFLUENCER, CAN I HAVE A WHITELIST ROLE IN EXCHANGE FOR PROMOTION?",
    description:
      "If you love our project, feel free to share or talk about us on social media. We can't promise anything but you'll be recognized for sure.",
  },
];
const useStyles = makeStyles({
  root: {
    panel1aContent: { color: '#ff2400' },
  },
  accordTypoHead: {
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '600',
    fontFamily: 'Poppins',
    p: 12,
    m: 2,
  },
  accordTypoText: {
    color: '#fff',
    fontSize: { xs: '14px', md: '16px' },
    fontWeight: '600',
    fontFamily: 'Poppins',
    p: 2,
    m: 2,
  },
  b: {
    background: 'transparent',
    boxShadow: 'none',
    borderRadius: '20px',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
  a: {
    background: 'rgba(256, 256, 256, 0.15)',
    borderRadius: '20px',
    boxShadow: 'none',
  },
});

export default function Faqs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <Container
        maxWidth='lg'
        sx={{
          background: 'rgba(256, 256, 256, 0.15)',
          pt: 10,
        }}
      >
        <Box container maxWidth='md' sx={{ margin: 'auto' }}>
          <Typography
            variant='h2'
            gutterBottom
            sx={{
              fontWeight: '700',
              color: '#fff',
              fontSize: '36px',
              fontFamily: 'Poppins',
              textAlign: 'center',
              mb: 8,
            }}
          >
            FAQs
          </Typography>
          {/* RED CIRCULAR SHAPE ON THE LEFT */}
          <Box
            sx={{
              // backgroundImage: `url(${ee24})`,
              // backgroundSize: 'fit',
              // backgroundPosition: 'center center',
              // backgroundRepeat: 'no-repeat',
              // width: '300px',
              // height: '300px',
              position: 'absolute',
              mt: { md: -5 },
              ml: { md: -32 },
              display: { xs: 'none', md: 'block' },
            }}
          >
            <img src={ee24} width={130} alt='shape' />
          </Box>
        </Box>

        <Box
          container
          maxWidth='md'
          sx={{
            margin: 'auto',
            borderRadius: '15px',
            flexWrap: 'wrap',
            overflow: 'hidden',
          }}
        >
          {accordList.map((accord, index) => (
            <Accordion
              sx={{ pl: { xs: 1, md: 8 }, pr: 1, pb: 2 }}
              className={
                expanded === `panel${index + 1}` ? classes.a : classes.b
              }
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary
                expandIcon={
                  expanded === `panel${index + 1}` ? (
                    <RemoveCircleOutlineIcon sx={{ color: '#fff' }} />
                  ) : (
                    <AddCircleOutlineIcon sx={{ color: '#fff' }} />
                  )
                }
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                <Typography
                  className={classes.accordTypoHead}
                  sx={{
                    color:
                      expanded === `panel${index + 1}` ? '#FF2FDE' : '#fff',
                  }}
                >
                  <Typography
                    component='span'
                    sx={{ color: '#FF2FDE', fontWeight: '600' }}
                  >
                    {index + 1}.&nbsp;
                  </Typography>
                  {accord.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.accordTypoText}>
                  {accord.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </React.Fragment>
  );
}
