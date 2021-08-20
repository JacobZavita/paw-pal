import { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Carousel from '../../components/Carousel'
import { LinearProgress } from '@material-ui/core'
import Petfinder from '../../utils/PetfinderAPI.js'

const localStorage = window.localStorage

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Pets = props => {
  // const classes = useStyles();
  const [loading, setLoading] = useState(false)

  // call the API inside useEffect in order to prevent it from continuously running
  useEffect(() => {
    // gets the query to make the API call, or an empty object if the query has not been passed yet
    const query = JSON.parse(localStorage.getItem('searchQuery')) || {}

    Petfinder.get(query)
      .then(({ data }) => {
        console.log(data)
        // console.log('query is:', query)
        const petfinder = data
        console.log(petfinder)

        // this is for debugging
        console.log(query)

        // code to add search data to petState.pets
        props.setPetState({ ...props.petState, pets: petfinder })

        console.log(props.petState)

        setLoading(true)
      })
      .catch(err => console.log('error in petfinder query front end ', err))
  }, [])

  return (
    <>
      {loading ? (<div style={{ margin: '75px auto 15px auto' }} align='center'>
        <Carousel petState={props.petState} setPetState={props.setPetState} />
      </div>) : (<LinearProgress style={{ margin: '75px auto 15px auto' }} />)}
    </>
  )
}

export default Pets
