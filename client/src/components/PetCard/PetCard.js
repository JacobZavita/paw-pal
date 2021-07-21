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
  
  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
            alt={props.petState.pets[7].name}
          // height="640"
            src={props.petState.pets[6].primary_photo_cropped.full}
          title={props.petState.pets[6].name}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Fab color='secondary' aria-label='add' align='left'>
                <ClearIcon />
              </Fab>
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h3" component="h3">
                {props.petState.pets[6].name}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Fab color='primary' aria-label='add'>
                <FavoriteIcon />
              </Fab>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography variant="h5" color="textSecondary" component="h5">
                Breed: {props.petState.pets[6].breeds.primary}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="h5" color="textSecondary" component="p">
                Age: {props.petState.pets[6].age}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" color="textSecondary" component="p">
                Sex: {props.petState.pets[6].gender}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions align='center'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            Learn More About {props.petState.pets[6].name}
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography>
                  Email: {props.petState.pets[7].contact.email}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography>
                  Phone: {props.petState.pets[7].contact.phone}
                </Typography>
              </Grid>
            </Grid>
            <br></br>
          </AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
    </>
  );
}

export default ImgMediaCard