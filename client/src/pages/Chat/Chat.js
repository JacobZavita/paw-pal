
// its a list. scrollable list xd.

// chatbox component can be a paper with text -- no it can be a card??? maybe?
import { makeStyles, Container, Paper, Grid, TextField, Button } from '@material-ui/core'
import SimpleCard from '../../components/SimpleCard'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import Cat from '../../components/Images/chatLongText.png'
import Hidden from '@material-ui/core/Hidden'
import Image from '../../components/Images/footerLong.png'
import { useState, useEffect, useRef } from 'react'

import Noise from '../../utils/NoiseAPI'

// styles
const useStyles = makeStyles({
  field: {
    marginTop: 10,
    marginBottom: 10,
    display: 'block'
  },
  catStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '500x',
    height: '125px',
    objectFit: 'cover',
    overflow: 'visible',
    zIndex: '2'
  },
  croppingCat: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '116px',
    width: '100%'
  },
  paperStyle: {
    padding: '5%'
  },
  gradientStyle: {
    background: 'linear-gradient(45deg, #595959 30%, #1c1c1c 90%)',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'auto 55%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '100vh'
  }
  // footerStyle: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   display: 'block',
  //   width: '100%',
  //   height: '150px',
  //   objectFit: 'cover'
  // }
})

// needs avatar prop
const Chat = props => {
  const scrollRef = useRef(null)
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
      setFormState({ ...formState, message: '' })
      setMessageState([...messageState, userMessage])
      console.log(...messageState, 'user message')
      await petMessage(userMessage)
    }
  }

  const petMessage = async (userMessage) => {
    setSpinnerState(true)
    // variable based on props
    await Noise.cat()
      .then(({ data }) => {
        const petMessage = {
          message: data,
          user: 'pet'
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
          {props.message.user === 'pet' && <SimpleCard body={props.message.message} />}
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
          {props.message.user === 'user' && <SimpleCard body={props.message.message} />}
        </Grid>
      </>
    )
  }

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behaviour: 'smooth' })
    }
  }, [messageState])

  return (
    <div className={classes.gradientStyle}>
      <Container maxWidth='sm'>
        <br /><br /><br /><br />
        <Hidden xsDown>
          <div className={classes.croppingCat}>
            <img src={Cat} className={classes.catStyle} />
          </div>
        </Hidden>
        <Paper style={{ minHeight: 400, maxHeight: 400, overflow: 'auto' }}>
          <Grid container>
            {
              messageState.map((element, i) => (<GridItem message={element} key={i} />))
            }
            <li style={{ listStyleType: 'none' }} ref={scrollRef} />
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
            style={{ backgroundColor: '#2f2f2f' }}
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

    </div>
  )
}

export default Chat
