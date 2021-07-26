import { useState } from 'react'
import { Container, Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import User from '../../utils/UserAPI'
import Image from '../../components/Images/footerLong.png'
import Dogs from '../../components/Images/profile2.png'

// components
import AuthForm from '../../components/AuthForm'

const localStorage = window.localStorage

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
    height: '700px',
    objectFit: 'cover',
    overflow: 'visible'
  },
  cropping: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '650px',
    width: '100%'
  },
  dogsStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    objectFit: 'cover',
    height: '300px',
    width: '100%',
    overflow: 'visible',
    position: 'relative',
    zIndex: 2
  },
  croppingDog: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '130px',
    width: '100%'
  },
  gradientStyle: {
    background: 'linear-gradient(45deg, #595959 30%, #1c1c1c 90%)',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'auto 55%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '100vh'
  }
}))

const Login = _ => {
  // styles
  const classes = useStyles()

  // state
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })

  // handle input change
  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  // handle login user
  const handleLoginUser = event => {
    event.preventDefault()
    console.log(formState)
    User.login(formState)
      .then(({ data: token }) => {
        localStorage.setItem('token', token)
        if (localStorage.getItem('token')) {
          window.location = '/'
        }
      })
  }

  return (
    <div className={classes.gradientStyle}>
      <Container maxWidth='sm'>
        <br /><br /><br /><br /><br /><br />
        <Paper>
          <Paper elevation={0} className={classes.paperStyle}>
            <Typography variant='h4' align='center'>
              Welcome to PawPal!
            </Typography>
            <Typography align='center' color='textSecondary'>
              Find your future pal with paws
            </Typography>
            <br /><br />
            <Container className={classes.myCenter}>
              <AuthForm
                formState={formState}
                handleInputChange={handleInputChange}
                handleSubmit={handleLoginUser}
              />
              <br />
              <Link to='/register' className={classes.linkColor}> Need an account? Register! </Link>
            </Container>
          </Paper>
          <div className={classes.croppingDog}>
            <img src={Dogs} className={classes.dogsStyle} />
          </div>
        </Paper>
      </Container>
    </div>
  )
}

export default Login
