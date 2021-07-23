import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Card, CardContent, Button, IconButton, Typography, Paper, Collapse, CardMedia } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url(https://i.ibb.co/806K2Z7/pexels-zen-chung-5749795.jpg)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  container: {
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
    textShadow: '2px 2px #000000'
  },
  goDown: {
    color: '#624CAB',
    fontSize: '4rem'
  },
  divider: {
    minHeight: '10vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7189FF'
  },
  dividerText: {
    paddingTop: '15px'
  },
  button: {
    marginBottom: '15px'
  },
  root1: {
    minHeight: '100vh',
    // backgroundColor: '#C1CEFE',
    backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  root2: {
    maxWidth: 645,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 440
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#fff'
  },
  cardDescription: {
    fontSize: '1.1rem',
    color: '#ddd'
  }
}))

const Landing = _ => {
  const classes = useStyles()
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  return (
    <>
      <div className={classes.root}>
        <Collapse in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapsedHeight={50}>
          <div className={classes.container}>
            <h1 className={classes.title}>
              Welcome to PawPal <br />Find Your Next Pet
            </h1>
            <Scroll to='about-pawpal' smooth={true}>
              <IconButton>
                <ExpandMoreIcon className={classes.goDown} />
              </IconButton>
            </Scroll>
          </div>
        </Collapse>
      </div>
      <Paper
        className={classes.divider}
        elevation={3}
        align='center'
      >
        <Typography
          className={classes.dividerText}
          gutterBottom
          variant='h4'
          component='h4'
        >
          Find Local Animals Up For Adoption In Your Area
        </Typography>
        <Button className={classes.button} variant='contained'>
          <Link to='/register'>
            Get Started
          </Link>
        </Button>
      </Paper>
      <div className={classes.root1}>
          <Card className={classes.root2}>
              <CardMedia
                className={classes.media}
                component='img'
                src={'https://i.ibb.co/jvrtfpC/pexels-helena-lopes-1904105.jpg'}
                title="Card Image"
              />
            <CardContent>
              <Typography
                gutterBottom
                variant='h5'
                component='h1'
                className={classes.cardTitle}
              >
                Search animals up for adoption among local agencies
              </Typography>
              <Typography
                variant='body2'
                component='p'
                className={classes.cardDescription}
              >
                Find Dogs, Cats, Birds, Horses, and Rabbits up for adoption by animal rescue groups in your area.
              </Typography>
            </CardContent>
          </Card>
        <Card className={classes.root2}>
          <CardMedia
            className={classes.media}
            component='img'
            src={'https://i.ibb.co/F4F9kWC/pexels-anastasia-shuraeva-5124967.jpg'}
            title="Card Image"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              component='h1'
              className={classes.cardTitle}
            >
              Find your favorites and share with your friends/family
              </Typography>
            <Typography
              variant='body2'
              component='p'
              className={classes.cardDescription}
            >
              Save your top picks. Add notes and comments. Share with your family and friends to see which ones they like.
              </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Landing
