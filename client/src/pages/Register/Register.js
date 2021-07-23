import { Container, Typography } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import User from '../../utils/UserAPI'

// components
import AuthForm from '../../components/AuthForm'

const useStyles = makeStyles(_ => ({
  myCenter: {
    textAlign: 'center'
  },
  linkColor: {
    color: '#f2f2f2'
  }
}))

const Register = _ => {
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
    <>
      <Container maxWidth='xs'>
        <br /><br /><br /><br /><br /><br />
        <Typography variant='h4' align='center'>
          This is the Register page
        </Typography>
        <hr
          width='60%'
        />
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
      </Container>
    </>
  )
}

export default Register
