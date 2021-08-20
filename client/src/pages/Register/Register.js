import { useState } from 'react'
import { Container, Typography, Paper, Grid } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import withWidth from '@material-ui/core/withWidth'
import User from '../../utils/UserAPI'
import Image from '../../components/Images/footerLong.png'
import Left from '../../components/Images/registerLeft2.png'
import Right from '../../components/Images/registerRight2.png'

// components
import AuthForm from '../../components/AuthForm'

const useStyles = makeStyles(_ => ({
  myCenter: {
    textAlign: 'center'
  },
  linkColor: {
    color: '#f2f2f2'
  },
  paperStyle: {
    padding: '5%'
  },
  footerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%',
    height: '650px',
    objectFit: 'cover'
  },
  cropping: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '650px',
    width: '100%'
  },
  croppingSides: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '627px',
    width: '100%'
  },
  catStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%',
    height: '625px',
    objectFit: 'cover',
    overflow: 'visible'
  },
  gradientStyle: {
    background: 'linear-gradient(45deg, #595959 30%, #1c1c1c 90%)',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'auto 50%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '100vh'
  }
}))

const Register = props => {
  // styles
  const classes = useStyles()
  // state
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    username: '',
    password: ''
  })

  const handleRegisterInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  const handleRegisterUser = event => {
    event.preventDefault()
    console.log(formState)
    User.register(formState)
      .then(() => {
        console.log('User registered!')
        window.location = '/login'
      })
  }

  return (
    <div className={classes.gradientStyle}>
      <Container maxWidth='md'>
        <br /><br /><br /><br /><br /><br />
        <Grid container>

          <Hidden smDown>
            <Grid item sm={1} />
          </Hidden>
          <Hidden xsDown>
            <Grid item sm={2} className={classes.croppingSides}>
              <img src={Left} alt='' className={classes.catStyle} />
            </Grid>
          </Hidden>
          <Grid item md={6} sm={8} xs={12}>
            <Paper className={classes.paperStyle}>
              <Typography variant='h4' align='center'>
                Create a PawPal Account!
              </Typography>
              <Typography align='center' color='textSecondary'>
                Find an animal that love you back!
              </Typography>

              <br /><br />
              <Container className={classes.myCenter}>
                <AuthForm
                  register
                  handleInputChange={handleRegisterInputChange}
                  formState={formState}
                  handleSubmit={handleRegisterUser}
                />
                <br />
                <Link to='/login' className={classes.linkColor}> Already signed up? Log in! </Link>
              </Container>
            </Paper>
          </Grid>
          <Hidden xsDown>
            <Grid item sm={2} className={classes.croppingSides}>
              <img src={Right} alt='' className={classes.catStyle} />
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid item sm={1} />
          </Hidden>
        </Grid>
      </Container>
      {/* <div className={classes.cropping}>
        <img src={Image} className={classes.footerStyle} />
      </div> */}
    </div>
  )
}

export default withWidth()(Register)
