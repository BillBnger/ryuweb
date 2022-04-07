import * as React from 'react';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Container, Grid, Divider, Box } from '@mui/material';

const Accordion = styled(props => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled(props => (
  <MuiAccordionSummary
    expandIcon={
      <AddIcon
        sx={{
          fontSize: '0.9rem',
          color: 'white',
          position: 'flex-end',
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(45deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function Faqs() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Container
        sx={{
          mt: { md: 10 },
          mb: { md: 10 },
        }}
      >
        <Grid container maxWidth='lg' m='auto' justifyContent='center'>
          <Box
            maxWidth='xl'
            sx={{
              padding: '30px',
              textAlign: 'center',
              zIndex: '1',
            }}
          >
            <Typography
              variant='h2'
              sx={{
                color: '#A08C5B',
                fontWeight: '800',
              }}
            >
              FAQs
            </Typography>
          </Box>
          <Grid item md={12}>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  What is special about this collection?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  How it works?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  How to buy the NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel4'}
              onChange={handleChange('panel4')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  What is an NFT?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel5'}
              onChange={handleChange('panel5')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  Are the videos easy to understand?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: '#000',
                border: '1px solid #cbb682',
              }}
              expanded={expanded === 'panel6'}
              onChange={handleChange('panel6')}
            >
              <AccordionSummary
                aria-controls='panel2d-content'
                id='panel2d-header'
              >
                <Typography
                  sx={{
                    color: '#cbb682',
                    fontWeight: 'bold',
                  }}
                >
                  What NFT’s can be purchased?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#fff' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
