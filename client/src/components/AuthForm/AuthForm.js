import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core'

const useStyles = makeStyles(_ => ({
  centerForm: {
    display: 'flex',
    alignItems: 'center'
  }
}))

const AuthForm = props => {
  const classes = useStyles()

  return (
    <form noValidate autoComplete='off' style={{ justifyContent: 'center' }} onSubmit={props.handleSubmit}>
      {
        (props.register)
          ? <>
            <TextField
              className={classes.field}
              id='name'
              name='name'
              value={props.formState.name}
              onChange={props.handleInputChange}
              variant='outlined'
              label='Name'
              color='primary'
              fullWidth
            />
            <br /><br />
          </> 
          : null
      }
      <TextField
        className={classes.field}
        id='username'
        name='username'
        value={props.formState.username}
        onChange={props.handleInputChange}
        variant='outlined'
        label='Username'
        color='primary'
        fullWidth
      />
      <br /><br />
      {
        (props.register)
          ? <>
            <TextField
              className={classes.field}
              id='email'
              name='email'
              value={(props.register) ? props.formState.email : null}
              onChange={props.handleInputChange}
              variant='outlined'
              label='Email'
              type='email'
              color='primary'
              fullWidth
            />
            <br /><br />
          </> 
          : null
      }
      {
        (props.register)
          ? <>
            <TextField
              className={classes.field}
              id='phone'
              name='phone'
              value={props.formState.phone}
              onChange={props.handleInputChange}
              variant='outlined'
              label='Phone Number'
              color='primary'
              fullWidth
            />
            <br /><br />
          </> 
          : null
      }
      <TextField
        className={classes.field}
        id='password'
        name='password'
        value={props.formState.password}
        onChange={props.handleInputChange}
        variant='outlined'
        label='Password'
        type='password'
        color='primary'
        fullWidth
      />
      <br /><br />
      <Button
        fullWidth
        type='submit'
        color='primary'
        variant='contained'
        size='large'
      >
        {
          (props.register) ? 'Register' : 'Login'
        }
      </Button>
    </form>
  )
}

export default AuthForm
