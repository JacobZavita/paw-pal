import { useState } from 'react'
import ImgMediaCard from '../../components/PetCard'

const Pets = props => {

  const [currentState, setCurrentState] = useState({
    current: 0
  })

  let current = 4

  const handleClickFavorite = () => {
    
    // current++
    console.log(current)
  }

  const handleClickPass = () => {
    current++
    console.log(current)
  }

  return (
    <>
      <div style={{ margin: '75px auto 15px auto' }} align='center'>
        <ImgMediaCard
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
