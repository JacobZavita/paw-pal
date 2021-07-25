import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import ImageListItemBar from '@material-ui/core/ImageListItemBar'
import ListSubheader from '@material-ui/core/ListSubheader'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import Pet from '../../utils/PetAPI'
import Note from '../../utils/NoteAPI'

import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import CheckIcon from '@material-ui/icons/Check'

import FavoriteIcon from '@material-ui/icons/Favorite'
import { black } from '@material-ui/core/colors'

import DeleteIcon from '@material-ui/icons/Delete'


function rand() {
  return Math.round(Math.random() * 20) - 10
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  root1: {
    flexGrow: 1
  },
  imageList: {
    width: 1000,
    height: 950,
    position: 'fixed',
    bottom: 25
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  root2: {
    maxwidth: 345
  },
  paper2: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  },
  img: {
    width: '100%'
  },
  borderedbox: {
    border: '80px solid #484444'
  }
}))

const Favorites = props => {
  function getModalStyle() {
    const top = 50 + rand()
    const left = 50 + rand()

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    }
  }
  const [selected, setSelected] = useState(false)

  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [modalState, setModalState] = useState({
    index: 0
  })
  const classes = useStyles()

  const [favState, setFavState] = useState({
    pets: []
    // name: []
  })

  useEffect(() => {
    Pet.favorites()
      .then(({ data: pets }) => {
        console.log(pets)
        setFavState({ ...favState, pets })
      })
  }, [])

  const handleOpen = (event) => {
    console.log(event.target.id)
    setModalState({ index: event.target.id })
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // deletes a pet from the user's favorites list
  const handleDelete = animalID => {
    console.log(favState)
    if (favState.pets.length) {
      favState.pets.forEach(pet => {
        if (animalID === pet.id) {
          Pet.delete(pet._id)
            .then(() => {
              const newFaveList = favState.pets.filter(pet => pet.id !== animalID)
              console.log('Animal deleted successfully!')
              console.log(newFaveList)
              // sets the fave state to the new array that doesn't have the deleted animal
              setFavState({ pets: newFaveList })
            })
            .catch(err => console.log(err))
        }
      })
    }
    
  }

  const ModalBody = props => {
    return (
      <div style={modalStyle} className={classes.paper2}>
        <img className={classes.img} src={props.pet.image} alt={props.pet.name} />
        <h2 id='simple-modal-title'>{props.pet.name}</h2>
        <p id='simple-modal-description'>
          {props.pet.city}, {props.pet.state}
          <br></br>
          Phone: {props.pet.phone}
          <br></br>
          E-mail: {props.pet.email}
          <br></br>
        </p>
        <Button
          variant='contained'
          color='primary'
          aria-label='outlined primary button group'
          onClick={handleClose}
        >
          close
        </Button>
        <IconButton aria-label='delete' onClick={() => {handleDelete(props.pet.id); handleClose()}}>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </div>
    )
  }
  return (
    <>
      <div className={classes.root}>
        <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
          <ListSubheader color='primary' component='div' style={{ textTransform: 'uppercase', textAlign: 'center', fontSize: '50px' }}></ListSubheader>
        </ImageListItem>
        <ImageList rowHeight={360} className={[classes.imageList, classes.borderedbox]}>
          {favState.pets.map((pet, i) => (
            <ImageListItem key={pet.img}>
              <img id={i} src={(pet.image == null) ? 'https://pbs.twimg.com/profile_images/446279626831044608/aCs3t5qe_400x400.png' : pet.image} onClick={(event) => handleOpen(event)} alt={pet.name} />
              <ImageListItemBar
                title={pet.name}
                subtitle={<span>{pet.city}, {pet.state}</span>}
                actionIcon={
                  <FavoriteIcon fontSize='large' style={{ paddingRight: '5px' }} className={classes.icon}>
                    <FavoriteIcon />
                  </FavoriteIcon>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby='simple-modal-title'
          aria-describedby='simple-modal-description'
        >
          <ModalBody pet={favState.pets[modalState.index]} />
        </Modal>
      </div>
      {/* module here */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        <body name={pet.name}/>
      </Modal> */}
    </>
  )
}

export default Favorites
