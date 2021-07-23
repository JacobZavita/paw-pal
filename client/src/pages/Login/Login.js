import { useState } from 'react'
import { Container, Typography, Paper } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import User from '../../utils/UserAPI'

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
        window.location = '/'
      })
  }

  return (
    <>
      <Container maxWidth='sm'>
        <br /><br /><br /><br /><br /><br />
        <Paper className={classes.paperStyle}>
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
      </Container>
    </>
  )
}

export default Login
