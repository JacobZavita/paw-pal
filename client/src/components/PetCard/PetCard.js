import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const useStyles = makeStyles({
  root: {
    maxWidth: '62%',
  },
});

const ImgMediaCard = props => {
  const classes = useStyles();

  const testOnClick = () => {
    console.log(props.petState)
    console.log(props.petState.pets[7])
  }

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
            alt={props.petState.pets[7].name}
          // height="640"
            src={props.petState.pets[7].primary_photo_cropped.full}
          title={props.petState.pets[7].name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.petState.pets[7].name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: {props.petState.pets[7].age}
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sex: {props.petState.pets[7].gender}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Breed: {props.petState.pets[7].breeds.primary}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={testOnClick}>
          Test: see data
        </Button>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          >
          Learn More About Me
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Email: {props.petState.pets[7].contact.email}
            </Typography>
            <br></br>
            <Typography>
              Phone: {props.petState.pets[7].contact.phone}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </CardActions>
    </Card>
    </>
  );
}

export default ImgMediaCard