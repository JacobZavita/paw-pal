import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Carousel from '../../components/Carousel'
// function Pets(){
// const getPets=()=>{
//   axios.get(`https://api.petfinder.com/v2/animals`, { headers: { Authorization: `Bearer ${'FLnqEoWDuj92X9rjiYmc2u0jYWwglFXJs0XL4R8neHOEYcZRwQ'}` } })
//     .then(
//       function(data){
//         console.log(data)
//       }

//     )

//     .catch(err => console.log(err))

// }

// return (
//   <div></div>
// )
// }



// const Card = () => {

//     return (

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Pets() {
  const classes = useStyles();
  const [pets, setPets] = useState([])
  const [expanded, setExpanded] = React.useState(false);
  useState( () => {
    const petfinder = require("@petfinder/petfinder-js")
    const client = new petfinder.Client({
      apiKey:
        "FLnqEoWDuj92X9rjiYmc2u0jYWwglFXJs0XL4R8neHOEYcZRwQ", secret: "54PUNYNUrcii3Z5iWPdWRDLNOKvFz5WOFs0zLfHG"
    })

    
    client.animal.search(`${'dog'}`)
      .then(function (res) {
        console.log(res)
        setPets(res.data.animals)
      })
      .catch(function (error) {
        console.log(error)
      })
  },[])
 
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div>
      <Carousel pets={pets}/>
    </div>
    
  );
}








