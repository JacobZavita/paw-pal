import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { Card, CardContent, Button, Box, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage: `url(${process.env.PUBLIC_URL + "/assets/pexels-chevanon-photography-1108099.jpeg"})`
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Landing = _ => {
  const classes = useStyles();

  return (
    <>
      <Box style={{ margin: '80px auto 15px auto' }}>
        <Card style={{ maxWidth: 1325, margin: '0 auto', padding: '20px 5px' }}>
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <Typography
                  variant='h3'
                  color='secondary'
                >
                  Find Your Next Pet
                </Typography>
                <Typography variant='h6' color='secondary'>
                  <CheckIcon color='primary' />
                    Search among local pets up for adoption
                </Typography>
                <Typography variant='h6' color='secondary'>
                  <CheckIcon color='primary' />
                    Swipe to find your favorites
                </Typography>
                <Typography
                  variant='h6'
                  color='secondary'
                  gutterBottom
                >
                  <CheckIcon color='primary' />
                    Share with friends and family
                </Typography>
                <Button variant='contained' color='default'>
                  Get Started
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
              >
                <img src={"https://i.ibb.co/pncdnn2/pexels-chevanon-photography-1108099.jpg"} style={{ borderRadius: '20px' }}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  )
}

export default Landing
