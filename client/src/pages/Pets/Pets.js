import ImgMediaCard from '../../components/PetCard'
import { Button } from '@material-ui/core'

const Pets = props => {
  
  const testOnClick = () => {
    console.log(props.petState.pets)
  }

  return (
    <div style={{ margin: '75px auto 15px auto' }} align='center'>
      <ImgMediaCard
        petState={props.petState}
        // pet={props.petState.pet}
        // pets={props.petState.pets}
        setPetState={props.setPetState}
      />
      <Button size="small" color="primary" onClick={testOnClick}>
        Learn More
        </Button>
    </div>
  )
}

export default Pets
