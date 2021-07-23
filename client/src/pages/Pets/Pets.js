// import { useState } from 'react'
// import ImgMediaCard from '../../components/PetCard'
import Carousel from '../../components/Carousel'
import { Client } from '@petfinder/petfinder-js'
import { useEffect } from 'react'

const Pets = props => {

  const client = new Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET})

  // call the API inside useEffect in order to prevent it from continuously running
  useEffect(() => {
    // gets the query to make the API call, or an empty object if the query has not been passed yet
    const query = JSON.parse(localStorage.getItem('searchQuery')) || {}

    client.animal.search(query)
    .then(({data}) => {
      // search data from petfinder
      let petfinder = data.animals
      console.log(petfinder)
      
      // this is for debugging
      console.log(query)

      // code to add search data to petState.pets
      props.setPetState({ ...props.petState, pets: petfinder })

      console.log(props.petState)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <div style={{ margin: '75px auto 15px auto' }} align='center'>
        <Carousel
          petState={props.petState}
          setPetState={props.setPetState}
        />
      </div>
    </>
  )
}

export default Pets