// import { useState } from 'react'
// import ImgMediaCard from '../../components/PetCard'
import Carousel from '../../components/Carousel'

const Pets = props => {

  // This was to track which card is being displayed. Use these functions to handle favorite button and pass button (pass for swiping)
  let current = 0
  const handleClickFavorite = () => {
    current++
    console.log(current)
  }
  const handleClickPass = () => {
    current++
    console.log(current)
  }

  return (
    <>
      <div style={{ margin: '75px auto 15px auto' }} align='center'>
        <Carousel
          petState={props.petState}
          setPetState={props.setPetState}
          handleClickFavorite={handleClickFavorite}
          handleClickPass={handleClickPass}
          current={current}
        />
      </div>
    </>
  )
}

export default Pets








