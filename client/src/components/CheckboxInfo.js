import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

// This component is used for the list of filters inside the Accordion on the search page

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
}))

// want to filter by: 
const CheckboxInfo = props => {
  const classes = useStyles()
  const [filterState, setFilterState] = React.useState({
    pug: false,
    samoyed: false,
    small: false,
    medium: false,
    large: false,
    male: false,
    female: false
  })

  const handleChange = (event) => {
    setFilterState({ ...filterState, [event.target.name]: event.target.checked })
  };

  const { pug, samoyed, small, medium, large, male, female } = filterState

  const sendData = () => {
    props.parentCallback({
      pug: filterState.pug,
      samoyed: filterState.samoyed,
      small: filterState.small,
      medium: filterState.medium,
      large: filterState.large,
      male: filterState.male,
      female: filterState.female
    })
    console.log('Filters applied!')
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Filters</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={pug} onChange={handleChange} name="pug" />}
            label="Pug"
          />
          <FormControlLabel
            control={<Checkbox checked={samoyed} onChange={handleChange} name="samoyed" />}
            label="Samoyed"
          />
          <FormControlLabel
            control={<Checkbox checked={small} onChange={handleChange} name="small" />}
            label="Small"
          />
          <FormControlLabel
            control={<Checkbox checked={medium} onChange={handleChange} name="medium" />}
            label="Medium"
          />
          <FormControlLabel
            control={<Checkbox checked={large} onChange={handleChange} name="large" />}
            label="Large"
          />
          <FormControlLabel
            control={<Checkbox checked={male} onChange={handleChange} name="male" />}
            label="Male"
          />
          <FormControlLabel
            control={<Checkbox checked={female} onChange={handleChange} name="female" />}
            label="Female"
          />
        </FormGroup>
        <FormHelperText>Click the below button to apply these filters</FormHelperText>
        <Button variant="contained" color="primary" onClick={sendData}>
          Done
        </Button>
      </FormControl>
    </div>
  )
}

export default CheckboxInfo