import * as React from 'react';
import { Box, makeStyles, CssBaseline, Container, Typography, Grid, Card, CardHeader, CardContent, CardActions, Button } from '@material-ui/core'

const tiers = [
  {
    title: 'Why we?',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem? Nulla eos consequatur qui molestiae expedita recusandae libero quos. Esse iure molestiae voluptas, praesentium minima ad asperiores sit officia veritatis.'
    ],
    buttonText: 'Read',
    buttonVariant: 'outlined',
  },
  {
    title: 'Create Reviews',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem? Nulla eos consequatur qui molestiae expedita recusandae libero quos. Esse iure molestiae voluptas, praesentium minima ad asperiores sit officia veritatis.'
    ],
    buttonText: 'Get started',
    buttonVariant: 'outline',
    color: 'secondary',
  },
  {
    title: 'Read Review',
    description: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, dolorem? Nulla eos consequatur qui molestiae expedita recusandae libero quos. Esse iure molestiae voluptas, praesentium minima ad asperiores sit officia veritatis.'
    ],
    buttonText: 'Create',
    buttonVariant: 'outlined',
  },
];

const useStyles = makeStyles({
  container: {
    background: 'url(https://miro.medium.com/max/1400/1*1ObyPQkG-UZqsvsy1PCKIg@2x.png)',
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    padding: '15rem',
  }
})

function PricingContent() {
  const styles = useStyles()
  return (
    <React.Fragment>
      <div className={styles.container}>
        <CssBaseline />
        <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 8 }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            color='#fff'
          >
            Our Services
          </Typography>
          <Typography variant="h5" align="center" color="#b3b3b3" component="p">
            For You
          </Typography>
        </Container>
        <Container maxWidth="md" component="main" sx={{ pb: 20 }}>
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === 'Review' ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 2,
                      }}
                    >
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button href='/reviews' fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default function InfoSection() {
  return <PricingContent />;
}