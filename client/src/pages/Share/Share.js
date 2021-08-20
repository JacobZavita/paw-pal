import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Hidden from '@material-ui/core/Hidden'
import { Container, Paper, Typography, List, ListItem, ListItemIcon } from '@material-ui/core'
import Pet from '../../utils/PetAPI.js'
import Image from '../../components/Images/footerLong.png'

import MailOutlineIcon from '@material-ui/icons/MailOutline'
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined'

const useStyles = makeStyles(_ => ({
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover'
  },
  padding: {
    padding: '5%'
  },
  padding2: {

  },
  wordMargin: {
    marginLeft: '16%'
  },
  footerStyle: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '100%',
    height: '650px',
    objectFit: 'cover'
  },
  cropping: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    height: '650px',
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

const Share = ({ match }) => {
  // styles
  const classes = useStyles()

  // state
  const [pet, setPet] = useState({})

  const fetchPet = async () => {
    console.log(match.params.id)
    Pet.share(match.params.id)
      .then(({ data }) => {
        console.log(data)
        setPet(data)
      })
      .catch(err => console.log('Error in fetch pet', err))
  }

  // get pet
  useEffect(() => {
    console.log(match)
    fetchPet()
  }, [])

  return (
    <div className={classes.gradientStyle}>
      <br /><br /><br /><br /><br /><br />
      <Container maxWidth='sm'>
        <Paper className={classes.padding}>
          <img src={pet.image} alt='' className={classes.image} />
          <br /><br />
          <Typography variant='h4' align='center'>
            <div button>
              {pet.name}
            </div>
          </Typography>
          <hr
            width='60%'
          />
          <List>
            <Hidden xsDown>
              {
                pet.email &&
                  <ListItem className={classes.wordMargin}>
                    <ListItemIcon><MailOutlineIcon color='primary' /></ListItemIcon>
                    <Typography color='textSecondary'>
                      {pet.email}
                    </Typography>
                  </ListItem>
              }
              {
                pet.phone &&
                  <ListItem className={classes.wordMargin}>
                    <ListItemIcon><PhoneAndroidIcon color='primary' /></ListItemIcon>
                    <Typography color='textSecondary'>
                      {pet.phone}
                    </Typography>
                  </ListItem>
              }
              {
                pet.address &&
                  <ListItem className={classes.wordMargin}>
                    <ListItemIcon><HomeOutlinedIcon color='primary' /></ListItemIcon>
                    <Typography color='textSecondary'>
                      {pet.address}
                    </Typography>
                  </ListItem>
              }
              {
                pet.city &&
                  <ListItem className={classes.wordMargin}>
                    <ListItemIcon><LocationOnOutlinedIcon color='primary' /></ListItemIcon>
                    <Typography color='textSecondary'>
                      {pet.city}, {pet.state}
                    </Typography>
                  </ListItem>
              }
            </Hidden>
            <Hidden smUp>
              {
                pet.email &&
                  <ListItem>
                    <ListItemIcon><MailOutlineIcon color='primary' /></ListItemIcon>
                    <Typography align='center' color='textSecondary'>{pet.email}</Typography>
                  </ListItem>
              }
              {
                pet.phone &&
                  <ListItem>
                    <ListItemIcon><PhoneAndroidIcon color='primary' /></ListItemIcon>
                    <Typography align='center' color='textSecondary'>{pet.phone}</Typography>
                  </ListItem>
              }
              {
                pet.address &&
                  <ListItem>
                    <ListItemIcon><HomeOutlinedIcon color='primary' /></ListItemIcon>
                    <Typography align='center' color='textSecondary'>{pet.address}</Typography>
                  </ListItem>
              }
              {
                pet.city &&
                  <ListItem>
                    <ListItemIcon><LocationOnOutlinedIcon color='primary' /></ListItemIcon>
                    <Typography align='center' color='textSecondary'>{pet.city}, {pet.state}</Typography>
                  </ListItem>
              }
            </Hidden>
          </List>
        </Paper>
        <br />
        <Typography variant='h6' style={{ backgroundColor: '#303030', width: '50px' }}>Notes:</Typography>
        {
          pet.notes && pet.notes.map((element, i) => {
            return (
              <div key={i}>
                <Paper className={classes.padding2}>
                  <List>
                    <ListItem>
                      <ListItemIcon><KeyboardArrowRightOutlinedIcon color='primary' /></ListItemIcon>
                      <Typography color='textSecondary'>{element.body}</Typography>
                    </ListItem>
                  </List>
                </Paper>
                <br />
              </div>
            )
          })
        }
      </Container>
    </div>
  )
}

export default Share
