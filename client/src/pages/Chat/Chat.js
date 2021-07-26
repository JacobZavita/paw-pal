
// its a list. scrollable list xd.

// chatbox component can be a paper with text -- no it can be a card??? maybe?
import { makeStyles, Container, Paper, Grid, TextField, Button, Avatar } from '@material-ui/core'
import SimpleCard from '../../components/SimpleCard'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import Cat from '../../components/Images/chatLongText.png'
import Hidden from '@material-ui/core/Hidden'
import Image from '../../components/Images/footerLong.png'
import { useState, useEffect, useRef } from 'react'

import User from '../../utils/UserAPI.js'
import Pet from '../../utils/PetAPI.js'
import Noise from '../../utils/NoiseAPI.js'

const localStorage = window.localStorage
const petID = localStorage.getItem('chatID')

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
  const [chat, setChat] = useState({
    pet: {}
  })

  // handlers
  const handleInputChange = ({ target }) => {
    setFormState({ ...formState, [target.name]: target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setFormState({ ...formState, messageError: false })
    console.log(chat.pet)
    // console.log(chat.user)
    if (formState.message === '') {
      setFormState({ ...formState, messageError: true })
    } else {
      const userMessage = {
        message: formState.message,
        user: 'user'
      }
      setFormState({ ...formState, message: '' })
      setMessageState([...messageState, userMessage])
      // console.log(...messageState, 'user message')
      await petMessage(userMessage)
    }
  }

  const petMessage = async (userMessage) => {
    setSpinnerState(true)
    // variable based on props
    if (userMessage.message === 'sus') {
      const petMessage = {
        message: 'ඞ',
        user: 'pet'
      }
      setTimeout(() => {
        setSpinnerState(false)
        setMessageState([...messageState, userMessage, petMessage])
      }, 500)
    } else {
      if (chat.pet.type === 'Cat') {
        await Noise.cat()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      } else if (chat.pet.type === 'Dog') {
        await Noise.dog()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      } else if (chat.pet.type === 'Bird') {
        await Noise.bird()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      } else if (chat.pet.type === 'Horse') {
        await Noise.horse()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      } else if (chat.pet.type === 'Rabbit') {
        await Noise.rabbit()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      } else {
        await Noise.noise()
          .then(({ data }) => {
            const petMessage = {
              message: data,
              user: 'pet'
            }
            setTimeout(() => {
              setSpinnerState(false)
              setMessageState([...messageState, userMessage, petMessage])
            }, 500)
          })
      }
    }
  }

  const GridItem = props => {
    // console.log(props)
    return (
      <>
        {
          props.message.user === 'pet' &&
            <Grid item xs={1}>
              <Avatar style={{ marginLeft: '15%' }} src={chat.pet.image} />
            </Grid>
        }
        <Grid item xs={5}>
          {props.message.user === 'pet' && <SimpleCard body={props.message.message} user='pet' />}
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={5}>
          {props.message.user === 'user' && <SimpleCard body={props.message.message} user='user' />}
        </Grid>
        {
          props.message.user === 'user' &&
            <Grid item xs={1}>
              <Avatar src={chat.pet.user.avatar} />
            </Grid>
        }
      </>
    )
  }

  useEffect(() => {
    Pet.share(petID)
      .then(({ data: petData }) => {
        // put this into pet state.
        setChat({ ...chat, pet: petData })
      })
      .catch(err => console.log('error in get pet in Chat, ', err))
  }, [])

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
          <Grid container spacing={1}>
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
