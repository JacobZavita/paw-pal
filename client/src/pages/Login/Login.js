import { useState } from 'react'
import { Container, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import User from '../../utils/UserAPI'

// components
import AuthForm from '../../components/AuthForm'

const useStyles = makeStyles(_ => ({
  myCenter: {
    textAlign: 'center'
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
      <Container maxWidth='xs'>
        <br /><br /><br /><br /><br /><br />
        <Typography variant='h4' align='center'>
          This is the Login page
        </Typography>
        <hr
          width='60%'
        />
        <br /><br />
        <Container className={classes.myCenter}>
          <AuthForm
            formState={formState}
            handleInputChange={handleInputChange}
            handleSubmit={handleLoginUser}
          />
          <br />
          <Link to='/register'> Don't have an account? Register! </Link>
        </Container>
      </Container>
    </>
  )
}

export default Login
