import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '62%',
  },
});

const ImgMediaCard = props => {
  const classes = useStyles();

  const testOnClick = () => {
    console.log(props.petState)
  }

  return (
    <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="640"
          src='https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/52407885/1/?bust=1626741417'
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Ezra
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Age: {props.petState.pets}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={testOnClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
    </>
  );
}

export default ImgMediaCard