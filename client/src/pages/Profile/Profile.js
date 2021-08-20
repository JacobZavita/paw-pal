import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import Hidden from '@material-ui/core/Hidden'
import User from '../../utils/UserAPI'
import ProfileModal from '../../components/ProfileModal'
import Image from '../../components/Images/footerLong.png'
import Dog from '../../components/Images/profileLongText.png'

const useStyles = makeStyles(_ => ({
  avatarLinkWidth: {
    width: '175px'
  },

  avatarStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer'
  },

  cropping: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '200px',
    width: '200px'
  },

  paperStyle: {
    padding: '5%'
  },

  footerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%',
    height: '650px',
    objectFit: 'cover'
  },
  cropping2: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '650px',
    width: '100%'
  },
  dogStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '500x',
    height: '125px',
    objectFit: 'cover',
    overflow: 'visible',
    zIndex: '2'
  },
  croppingDog: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '116px',
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
  const handleSaveMe = _ => {
    User.update(userState)
      .then(_ => {
        console.log('updated!')
      })
      .catch(err => console.log('error in handleSaveMe ', err))
  }

  const handleOpenName = () => {
    if (!openName) {
      setOpenName(!openName)
    }
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
    <div className={classes.gradientStyle}>
      <Container maxWidth='sm'>
        <br /><br /><br /><br /><br />
        <Hidden xsDown>
          <div className={classes.croppingDog}>
            <img src={Dog} alt='' className={classes.dogStyle} />
          </div>
        </Hidden>
        <Paper>
          <Paper elevation={0} className={classes.paperStyle}>
            <div className={classes.cropping}>
              <img src={userState.avatar} alt='' className={classes.avatarStyle} onClick={handleOpenAvatar} />
            </div>
            <br /><br />
            <Typography variant='h4' align='center'>
              <div button onClick={handleOpenName}>
                {userState.name}'s Profile
              </div>
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
                <Typography color='textSecondary'>
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
                <Typography color='textSecondary'>
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
                <Typography color='textSecondary'>
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
                <Typography noWrap className={classes.avatarLinkWidth} color='textSecondary'>
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
              onClick={handleSaveMe}
              color='primary'
              variant='contained'
            >
              Save
            </Button>
          </Paper>
        </Paper>
      </Container>
      {/* <div className={classes.cropping2}>
        <img src={Image} className={classes.footerStyle} />
      </div> */}
    </div>
  )
}

export default Profile
