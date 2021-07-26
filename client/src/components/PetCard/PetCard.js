import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Collapse, IconButton, Paper } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ClearIcon from '@material-ui/icons/Clear'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import Background from '../Images/footer.png'
import Pet from '../../utils/PetAPI'
import { Popover  } from '@material-ui/core'
import PetsIcon from '@material-ui/icons/Pets';
import Divider from '@material-ui/core/Divider';
import Image from '../../components/Images/footerLong.png'
import NoImage from '../Images/noimage.jpg'


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '300px',
    
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
  transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  background: {
    backgroundImage: `url(${Background})`
  },
    image: {
      height: '500px',
      width: '70vh',
      objectFit: 'cover',
      borderRadius: '15px',
      // align: 'center'
      },
      // cardWidth: {
      //   width: '30vh',
      //   align: 'left',
      // },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  typography: {
    padding: theme.spacing(2),
  },
  gradientStyle: {
    background: 'linear-gradient(45deg, #595959 30%, #1c1c1c 90%)',
    backgroundImage: `url(${Image})`,
    backgroundSize: 'auto 55%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    height: '100vh'
  },
}));

const ImgMediaCard = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)  // this is for popover component
  const [popoverText, setPopoverText] = useState(false)  // this is for the popover when the user adds a pet to their favorites
  
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }

  const handlePopoverText = myText => {
    setPopoverText(myText)
  }

  let petData = props.petState.pets[props.activeStep]

  // for popover component
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleOnClick = animalID => {
    // checks if there are duplicate pet in favorites list
    Pet.favorites()
      .then(({data}) => {
        console.log(`This animal's ID is: ${animalID}`)
        let isDuplicate = false
        data.forEach(pet => {
          if (animalID === pet.id) {
            isDuplicate = true
            handlePopoverText(isDuplicate)
          }
        })
        console.log(`Duplicate?: ${isDuplicate}`)
        if (!isDuplicate) {
          handlePopoverText(isDuplicate)
          const newPet = {
            id: petData.id,
            name: petData.name,
            image: (petData.primary_photo_cropped == null) ? 'https://peoplewithpets.com/wp-content/uploads/2019/11/people-with-pets-no-image-available.jpg' : petData.primary_photo_cropped.full,
            phone: petData.contact.phone,
            email: petData.contact.email,
            type: petData.type,
            address: petData.contact.address.address1,
            city: petData.contact.address.city,
            state: petData.contact.address.state
          }
          Pet.add(newPet)
            .then(console.log('added new pet'))
            .catch(err => console.log(err))
        }
      })
      .catch(err => console.log(err))
  }

  return (
    
    
      <Card
        className={classes.root.theme}
        style={{
          
          width: "70vh",
          borderRadius: "20px", 
        // backgroundImage: `url(${Background})` 
      }}
  
      >
        <CardActionArea>
          <CardMedia
            className={classes.image}
            component="img"
            
            alt={petData.name}
          src={(petData.primary_photo_cropped == null) ? 'https://peoplewithpets.com/wp-content/uploads/2019/11/people-with-pets-no-image-available.jpg' : petData.primary_photo_cropped.full}
            title={petData.name}
          />
        <CardContent className={classes.cardWidth}>
          <Typography gutterBottom variant="h4" component="h4">
            <b> Hi, I'm {petData.name}</b> <PetsIcon />
                </Typography>
            
            <Grid container spacing={1}>
              <Grid item xs={8}>
              <Typography variant="h6" component="h6" align="left">
                <b style={{ color: "#7189FF" }}> Primary Breed:</b> {petData.breeds.primary}
                </Typography>
              {(petData.breeds.secondary) ?
                <Grid item>
                  <Typography variant="h6" component="h6" align="left">
                      <b style={{color:"#7189FF"}}> Secondary Breed:</b> {petData.breeds.secondary}
                  </Typography>
                </Grid> : null}
              </Grid>
              <Grid item xs={8} align="left">
                <Typography variant="h6" component="h6" align="left">
                <b style={{ color: "#7189FF" }}> Age Range:</b> {petData.age}
                </Typography>
                <Typography variant="h6" component="h6" align="left">
                <b style={{ color: "#7189FF" }}>  Gender:</b> {petData.gender}
                </Typography>
              </Grid>
            </Grid> 
          </CardContent>
        </CardActionArea>

        <CardActions>
          {/* <IconButton color='secondary' onClick={props.handleClickPass}>
            <ClearIcon />
          </IconButton> */}
          <IconButton color='primary' aria-describedby={id} onClick={(event) => {handleOnClick(petData.id); handlePopoverClick(event)}}>
            <FavoriteIcon />
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>{popoverText ? 'Already in favorites' : 'Added to favorites!'}</Typography>
          </Popover>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Typography variant="h6" align="center">
              <b style={{ color: "#7189FF" }}> More About {petData.name}:</b><br />
              </Typography>
            <Typography paragraph align="left">
              <b> {petData.description}</b>
              </Typography>
              <Typography paragraph align="left">
              <b style={{ color: "#7189FF" }}> Email:</b> <b>{(petData.contact.email == null) ? 'N/A' : petData.contact.email}</b>
              </Typography>
              <Typography paragraph align="left">
              <b style={{ color: "#7189FF" }}>Phone:</b> <b> {(petData.contact.phone == null) ? 'N/A' : petData.contact.phone} </b>
              </Typography>
              <Typography paragraph align="left">
              <b style={{ color: "#7189FF" }}> Location: </b> <b>{petData.contact.address.address1}<br />{petData.contact.address.city}, {petData.contact.address.state}</b>
              </Typography>
            </CardContent>
          </Collapse>
        </CardActions>
      </Card>
      
      
      
    
    
  );
}

export default ImgMediaCard
        