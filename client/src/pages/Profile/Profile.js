import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import User from '../../utils/UserAPI'
import ProfileModal from '../../components/ProfileModal'

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

  const [openName, setOpenName] = useState(false)
  const [openEmail, setOpenEmail] = useState(false)
  const [openPhone, setOpenPhone] = useState(false)
  const [openAvatar, setOpenAvatar] = useState(false)

  // handlers
  const handleOpenName = () => {
    // if (!openName) {
    //   setOpenName(!openName)
    // }
    setOpenName(!openName)
  }
  const handleOpenEmail = () => {
    if (!openEmail) {
      setOpenEmail(!openEmail)
    }
  }
  const handleOpenPhone = () => {
    if (!openPhone) {
      setOpenPhone(!openPhone)
    }
  }
  const handleOpenAvatar = () => {
    if (!openAvatar) {
      setOpenAvatar(!openAvatar)
    }
  }
  const handleCloseName = () => {
    setOpenName(false)
    console.log(openName)
  }
  const handleCloseEmail = () => {
    setOpenEmail(false)
  }
  const handleClosePhone = () => {
    setOpenPhone(false)
  }
  const handleCloseAvatar = () => {
    setOpenAvatar(false)
  }
  // inputs
  const handleNameInput = event => {
    setUserState({ ...userState, name: event.target.value })
  }
  const handleEmailInput = event => {
    setUserState({ ...userState, email: event.target.value })
  }
  const handlePhoneInput = event => {
    setUserState({ ...userState, phone: event.target.value })
  }
  const handleAvatarInput = event => {
    setUserState({ ...userState, avatar: event.target.value })
  }

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
          <ListItem button onClick={handleOpenName}>
            <ListItemIcon><PersonOutlineIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Name:' />
            <Typography>
              {userState.name}
            </Typography>
            <ProfileModal
              type='name'
              state={openName}
              nameState={userState.name}
              handleInputChange={handleNameInput}
              handleOpen={handleOpenName}
              handleClose={handleCloseName}
            />
          </ListItem>
          <ListItem button onClick={handleOpenEmail}>
            <ListItemIcon><MailOutlineIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Email:' />
            <Typography>
              {userState.email}
            </Typography>
            <ProfileModal
              type='email'
              state={openEmail}
              nameState={userState.email}
              handleInputChange={handleEmailInput}
              handleOpen={handleOpenEmail}
              handleClose={handleCloseEmail}
            />
          </ListItem>
          <ListItem button onClick={handleOpenPhone}>
            <ListItemIcon><PhoneAndroidIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Phone:' />
            <Typography>
              {userState.phone}
            </Typography>
            <ProfileModal
              type='phone'
              state={openPhone}
              nameState={userState.phone}
              handleInputChange={handlePhoneInput}
              handleOpen={handleOpenPhone}
              handleClose={handleClosePhone}
            />
          </ListItem>
          <ListItem button onClick={handleOpenAvatar}>
            <ListItemIcon><AccountBoxIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Avatar:' />
            <Typography noWrap className={classes.avatarLinkWidth}>
              {userState.avatar}
            </Typography>
            <ProfileModal
              type='avatar'
              state={openAvatar}
              nameState={userState.avatar}
              handleInputChange={handleAvatarInput}
              handleOpen={handleOpenAvatar}
              handleClose={handleCloseAvatar}
            />
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
