import { makeStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import { Card, CardContent, Button, Box, Typography, Grid, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bullet: {
    direction: 'ltr',
    // paddingLeft: '50px',
    textShadow: '1px 1px 2px black',
    color: 'white'
  },
  headline: {
    marginTop: '25%',
    color: 'white',
    textShadow: '1px 1px 2px black'
  },
  button: {
    direction:'ltr',
    marginLeft: '35%'
  },
  box: {
    backgroundImage: `url(https://i.ibb.co/806K2Z7/pexels-zen-chung-5749795.jpg)`,
    margin: '80px auto 15px auto',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '800px',
    maxWidth: '1325px'
  },
  paperGridStyle: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1325px',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    }
  },
  paperStyle: {
    height: '250px',
    display: 'flex',
    flexWrap: 'wrap'
  }
}));

const Landing = _ => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Card className={classes.box}>
          <CardContent>
            <Grid container>
              <Grid
                item
                xs={12}
              >
                <Typography
                  variant='h3'
                  align='center'
                  className={classes.headline}
                >
                  Find Your Next Pet
                </Typography>
              </Grid>
            </Grid>
            <br></br>
            <Grid container>
              <Grid
                item
                xs={0}
                sm={2}
                md={4}
              >
              </Grid>
              <Grid
                item
                xs={12}
                sm={10}
                md={8}
                align='left'
              >
                <Typography className={classes.bullet} variant='h6'>
                  <CheckIcon color='primary' />
                    Search among local pets up for adoption
                </Typography>
                <Typography className={classes.bullet} variant='h6'>
                  <CheckIcon color='primary' />
                    Swipe to find your favorites
                </Typography>
                <Typography
                  className={classes.bullet}
                  variant='h6'
                  gutterBottom
                >
                  <CheckIcon color='primary' />
                    Share with friends and family
                </Typography>
              </Grid>
                <Button className={classes.button} variant='contained'>
                  <Link to='/register'>
                    Get Started
                  </Link>
                </Button>
            </Grid>
          </CardContent>
        </Card>
      </Box>
      <Box align='center'>
        <Grid container className={classes.paperGridStyle} align='center'>
          <Grid item xs={12} sm={4} md={3}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Typography>
                ADOPT!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Paper elevation={3} className={classes.paperStyle}>
              <Typography>
                ADOPT!
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={3} >
            <Paper elevation={3} className={classes.paperStyle}>
              <Typography>
                ADOPT!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Landing
