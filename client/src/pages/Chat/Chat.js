
// its a list. scrollable list xd.

// chatbox component can be a paper with text -- no it can be a card??? maybe?

import { makeStyles, Container, Paper, Grid, TextField, Button } from '@material-ui/core'
import SimpleCard from '../../components/SimpleCard'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { useState } from 'react'

import Noise from '../../utils/NoiseAPI'

// styles
const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 10,
    display: 'block'
  }
})

// needs avatar prop
const Chat = _ => {
  // styles
  const classes = useStyles()
  // state
  const [formState, setFormState] = useState({
    message: '',
    messageError: false
  })
  const [spinnerState, setSpinnerState] = useState(false)
  const [messageState, setMessageState] = useState([])

  // handlers
  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormState({ ...formState, messageError: false })

    if (formState.message === '') {
      setFormState({ ...formState, messageError: true })
    } else {
      const userMessage = {
        message: formState.message,
        user: 'user'
      }
      setMessageState([...messageState, userMessage])
      console.log(...messageState, 'user message')
      await petMessage(userMessage)
    }
  }

  const petMessage = async (userMessage) => {
    setSpinnerState(true)
    await Noise.noise()
      .then(({ data }) => {
        const petMessage = {
          message: data,
          user: 'dog'
        }
        setTimeout(() => {
          setSpinnerState(false)
          setMessageState([...messageState, userMessage, petMessage])
          console.log(...messageState, 'pet message')
        }, 500)
      })
  }

  const GridItem = props => {
    // console.log(props)
    return (
      <>
        <Grid item xs={5}>
          {props.message.user === 'dog' && <SimpleCard body={props.message.message} />}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}> 
          {props.message.user === 'user' && <SimpleCard body={props.message.message} />}
        </Grid>
      </>
    )
  }

  return (
    <>
      <Container maxWidth='sm'>
        <h1>This is the Chat page</h1>
        <Paper style={{ minHeight: 400, maxHeight: 400, overflow: 'auto' }}>
          <Grid container>
            <Grid item xs={5} />
            <Grid item xs={2} />
            <Grid item xs={5}>
              <SimpleCard body='Test Message Here!' />
            </Grid>

            <Grid item xs={5}>
              <SimpleCard body='Woof Woof!' />
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={2} />
            {
              messageState.map((element, i) => (<GridItem message={element} key={i} />))
            }
          </Grid>
        </Paper>
        <form noValidate autoComplete='off' onSubmit={handleSubmit}>
          <TextField
            className={classes.field}
            id='message'
            name='message'
            variant='outlined'
            label='Message'
            color='primary'
            multiline
            rows={4}
            fullWidth
            required
            value={formState.message}
            onChange={handleInputChange}
            error={formState.messageError}
          />
          <Button
            type='submit'
            color='primary'
            variant='contained'
            endIcon={<KeyboardArrowRightIcon />}
          >
            Send
          </Button>
        </form>
      </Container>

    </>
  )
}

export default Chat
