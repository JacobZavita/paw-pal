import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { FormHelperText, Button } from '@material-ui/core'

// This component is used to render the filters under the search page

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const AdvancedSelect = props => {
  const classes = useStyles()

  // add any filter fields here so they can be tracked and updated
  const [breed, setBreed] = useState('')
  const [gender, setGender] = useState('')
  const [size, setSize] = useState('')

  const handleBreedChange = (event) => {
    setBreed(event.target.value)
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value)
  }
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }

  const sendData = () => {
    props.parentCallback({
      breed: breed,
      gender: gender,
      size: size
    })
    console.log('Filters applied!')
  }

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Breed</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={breed}
          onChange={handleBreedChange}
        >
          <MenuItem value={'Pug'}>Pug</MenuItem>
          <MenuItem value={'Samoyed'}>Samoyed</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          onChange={handleGenderChange}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Size</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={size}
          onChange={handleSizeChange}
        >
          <MenuItem value={'Small'}>Small</MenuItem>
          <MenuItem value={'Medium'}>Medium</MenuItem>
          <MenuItem value={'Large'}>Large</MenuItem>
        </Select>
        <FormHelperText>Click the below button to apply these filters</FormHelperText>
        <Button variant="contained" color="primary" onClick={sendData}>
          Done
        </Button>
      </FormControl>
    </div>
  )
}

export default AdvancedSelect