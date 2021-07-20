import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import User from '../../utils/UserAPI'

const useStyles = makeStyles(_ => ({
  avatarLinkWidth: {
    width: '225px'
  }
}))

let me = {}

// get user's data
User.me()
  .then(res => {
    me = res.data
  })
  . catch(err => console.log('error in user.me ', err))

const seeMe = _ => {
  console.log('hitting this')
  console.log(me)
}

const Profile = _ => {
  // styles
  const classes = useStyles()

  // state
  const [userState, setUserState] = useState({
    name: '',
    email: '',
    phone: '',
    avatar: ''
  })

  useEffect(_ => {
    User.me()
      .then(({ data: user }) => {
        console.log(user)
        setUserState({ ...userState, name: user.name, email: user.email, phone: user.phone, avatar: user.avatar })
      })
  }, [])

  return (
    <>
      <Container maxWidth='sm'>
        <br /><br /><br /><br /><br /><br />
        <Typography variant='h4' align='center'>
          {userState.name}'s Profile
        </Typography>
        <hr
          width='60%'
        />
        <br />
        {/* <p>List goes here</p> */}
        <List>
          <ListItem button>
            <ListItemIcon><PersonOutlineIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Name:' />
            <Typography>
              {userState.name}
            </Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon><MailOutlineIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Email:' />
            <Typography>
              {userState.email}
            </Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon><PhoneAndroidIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Phone:' />
            <Typography>
              {userState.phone}
            </Typography>
          </ListItem>
          <ListItem button>
            <ListItemIcon><AccountBoxIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Avatar:' />
            <Typography noWrap className={classes.avatarLinkWidth}>
              {userState.avatar}
            </Typography>
          </ListItem>
        </List>
        <br />
        <Button
          fullWidth
          type='submit'
          onClick={seeMe}
          color='primary'
          variant='contained'
        >
          Save
        </Button>
      </Container>
    </>
  )
}

export default Profile
