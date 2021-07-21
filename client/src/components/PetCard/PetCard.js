import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails, Fab, Grid } from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ClearIcon from '@material-ui/icons/Clear'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '62%',
    '& > *': {
    margin: theme.spacing(1)
    },
  },
}));

const ImgMediaCard = props => {
  const classes = useStyles();
  
  let petData = props.petState.pets[props.current]

  return (
    <>
    <Card
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          component="img"
            alt={petData.name}
          // height="640"
            src={(petData.primary_photo_cropped == null) ? 'https://pbs.twimg.com/profile_images/446279626831044608/aCs3t5qe_400x400.png' : petData.primary_photo_cropped.full}
            title={petData.name}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography gutterBottom variant="h3" component="h3">
                  {petData.name}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" color="textSecondary" component="h5">
                  Breed: {petData.breeds.primary}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" color="textSecondary" component="p">
                  Age: {petData.age}
              </Typography>
              <Typography variant="h5" color="textSecondary" component="p">
                  Sex: {petData.gender}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions align='center'>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Fab color='secondary' aria-label='add' align='left' onClick={props.handleClickPass}>
                <ClearIcon />
              </Fab>
            </Grid>
            <Grid item xs={6}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  Learn More About {petData.name}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography>
                        Email: {petData.contact.email}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        Phone: {petData.contact.phone}
                      </Typography>
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={3}>
              <Fab color='primary' aria-label='add' onClick={props.handleClickFavorite}>
                <FavoriteIcon />
              </Fab>
            </Grid>
          </Grid>
      </CardActions>
    </Card>
    </>
  );
}

export default ImgMediaCard