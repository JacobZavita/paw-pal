import ImgMediaCard from '../../components/PetCard'

const Pets = props => {

  return (
    <>
      <div style={{ margin: '75px auto 15px auto' }} align='center'>
        <ImgMediaCard
          petState={props.petState}
          setPetState={props.setPetState}
        />
      </div>
    </>
  )
}

export default Pets
