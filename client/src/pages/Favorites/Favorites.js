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
    width: 750,
    height: 900,
    position: 'fixed',
    bottom: 80
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
  }
}))

// const itemData = [
//   {
//     id: 52426558,
//     organization_id: 'VA117',
//     url: 'https://www.petfinder.com//dog//b-litter-benson-52426558//va//arlington//lost-dog-and-cat-rescue-foundation-va117//?referrer_id=4c555aad-4878-4e89-9db8-4e724a0d3d8b',
//     type: 'Dog',
//     species: 'Dog',
//     breeds: {
//       primary: 'Mixed Breed',
//       secondary: null,
//       mixed: false,
//       unknown: false
//     },
//     colors: {
//       primary: 'Red \/ Chestnut \/ Orange',
//       secondary: null,
//       tertiary: null
//     },
//     age: 'Baby',
//     gender: 'Male',
//     size: 'Small',
//     coat: null,
//     attributes: {
//       spayed_neutered: true,
//       house_trained: false,
//       declawed: null,
//       special_needs: false,
//       shots_current: true
//     },
//     environment: {
//       children: null,
//       dogs: null,
//       cats: null
//     },
//     tags: [

//     ],
//     name: 'B Litter: Benson',
//     description: 'If you are interested in adopting Benson, please email dogs@lostdogrescue.org\n \nBenson is new to Lost Dog and Cat Rescue Foundation....',
//     organization_animal_id: 'LDAC-A-32924',
//     photos: [

//     ],
//     primary_photo_cropped: 'https://i.imgur.com/CN9tAbK.png',
//     videos: [

//     ],
//     status: 'adoptable',
//     status_changed_at: '2021-07-21T17:00:25+0000',
//     published_at: '2021-07-21T17:00:25+0000',
//     distance: null,
//     contact: {
//       email: 'dogs@lostdogrescue.org',
//       phone: '(703) 295-DOGS (3647)',
//       address: {
//         address1: 'P.O. Box 223953',
//         address2: null,
//         city: 'Arlington',
//         state: 'VA',
//         postcode: '22205',
//         country: 'US'
//       }
//     },
//     _links: {
//       self: {
//         href: '\/v2\/animals\/52426558'
//       },
//       type: {
//         href: '\/v2\/types\/dog'
//       },
//       organization: {
//         href: '\/v2\/organizations\/va117'
//       }
//     }
//   }
// ]

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
  const [selected, setSelected] = React.useState(false)

  const [modalStyle] = React.useState(getModalStyle)
  const [open, setOpen] = React.useState(false)
  const [modalState, setModalState] = React.useState({
    index: 0
  })
  const classes = useStyles()

  const [favState, setFavState] = useState({
    pets: [],
    name: []
  })

  // const handleInputChange = ({ target }) => {
  //   setFavState({ ...favState, [target.name]: target.value })
  // }

  // const handleCreateFavorite = event => {
  //   event.preventDefault()
  //   Pet.create({
  //     name: favState.name,
  //     image: favState.image
  //   })
  //     .then(({ data: post }) => {
  //       const pets = [...favState.pets]
  //       pets.push(pets)
  //       setFavState({ ...favState, pets, name: '', image: '' })
  //     })
  // }
  // const handleNameInput = event => {
  //   setFavState({ ...favState, name: event.target.value })
  // }
  // const handleImageInput = event => {
  //   setFavState({ ...favState, image: event.target.value })
  // }
  // const handlePhoneInput = event => {
  //   setFavState({ ...favState, phone: event.target.value })
  // }
  // const handleEmailInput = event => {
  //   setFavState({ ...favState, email: event.target.value })
  // }
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
        <IconButton aria-label='delete'>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </div>
    )
  }
  return (
    <>
      <div className={classes.root}>
        <ImageList rowHeight={360} className={classes.imageList}>
          <ImageListItem key='Subheader' cols={2} style={{ height: 'auto' }}>
            <ListSubheader color='primary' component='div'>Favorites</ListSubheader>
          </ImageListItem>
          {favState.pets.map((pet, i) => (
            <ImageListItem key={pet.img}>
              <img id={i} src={(pet.image == null) ? 'https://pbs.twimg.com/profile_images/446279626831044608/aCs3t5qe_400x400.png' : pet.image} onClick={(event) => handleOpen(event)} alt={pet.name} />
              <ImageListItemBar
                title={pet.name}
                subtitle={<span>{pet.city}, {pet.state}</span>}
              // actionIcon={
              //   <IconButton aria-label={`info about ${pet.city}`} href={pet.url} className={classes.icon}>
              //     <InfoIcon />
              //   </IconButton>
              // }
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
