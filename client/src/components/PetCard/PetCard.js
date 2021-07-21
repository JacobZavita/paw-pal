import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Grid, Collapse, IconButton } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ClearIcon from '@material-ui/icons/Clear'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'
import Background from './pawprints.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
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
      height: '600px',
      objectFit: 'cover',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    })
    },
    expandOpen: {
      transform: 'rotate(180deg)'
    }
}));

const ImgMediaCard = props => {
  const classes = useStyles()
  const [expanded, setExpanded] = useState(false)
  
  const handleExpandClick = () => {
    setExpanded(!expanded)
  }
  
  let petData = props.petState.pets[props.activeStep]

  return (
    <>
      <Card
        className={classes.root}
        style={{ backgroundImage: `url(${Background})` }}
      >
        <CardActionArea>
          <CardMedia
            className={classes.image}
            component="img"
            alt={petData.name}
            src={(petData.primary_photo_cropped == null) ? 'https://pbs.twimg.com/profile_images/446279626831044608/aCs3t5qe_400x400.png' : petData.primary_photo_cropped.full}
            title={petData.name}
          />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography gutterBottom variant="h4" component="h4">
                    {petData.name}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="h6" color="textSecondary" component="h6">
                  Breed: {petData.breeds.primary}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6" color="textSecondary" component="h6">
                  Age: {petData.age}
                </Typography>
                <Typography variant="h6" color="textSecondary" component="h6">
                  Sex: {petData.gender}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>

        <CardActions align='center'>
          <IconButton color='secondary' onClick={props.handleClickPass}>
            <ClearIcon />
          </IconButton>
          <IconButton color='primary' onClick={props.handleClickFavorite}>
            <FavoriteIcon />
          </IconButton>
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
              <Typography paragraph>
                More About {petData.name}
              </Typography>
              <Typography paragraph>
                Email: {petData.contact.email}
              </Typography>
              <Typography paragraph>
                Phone: {petData.contact.phone}
              </Typography>
            </CardContent>
          </Collapse>
        </CardActions>
      </Card>
    </>
  );
}

export default ImgMediaCard
        