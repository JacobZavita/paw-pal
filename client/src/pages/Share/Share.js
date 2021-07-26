import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper, Typography } from '@material-ui/core'
import Pet from '../../utils/PetAPI.js'

const useStyles = makeStyles(_ => ({
  image: {
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer'
  },
  padding: {
    padding: '5%'
  },
  padding2: {
    padding: '2%'
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
    <>
      <br /><br /><br /><br /><br /><br />
      <Typography variant='h4' align='center'>
        This is the Share page
      </Typography>
      <hr style={{ width: '60%' }} />
      <br />
      <Container maxWidth='sm'>
        <Paper className={classes.padding}>
          <img src={pet.image} className={classes.image} />
          <Typography>Name: {pet.name}</Typography>
          <Typography>Email: {pet.email}</Typography>
          <Typography>Phone: {pet.phone}</Typography>
          <Typography>address: {pet.address}, {pet.city} {pet.state}</Typography>
        </Paper>
        <br />
        <Typography>Notes:</Typography>
        {
          pet.notes && pet.notes.map((element, i) => {
            return (
              <div key={i}>
                <Paper className={classes.padding2}>
                  <Typography>Title: {element.title}</Typography>
                  <Typography>Body: {element.body}</Typography>
                </Paper>
                <br />
              </div>
            )
          })
        }
      </Container>
    </>
  )
}

export default Share
