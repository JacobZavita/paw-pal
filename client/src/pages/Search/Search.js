import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
import axios from 'axios'
import { Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}))

const Search = () => {
  const classes = useStyles()

  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleOnClick = () => {
    // make axios request here
    axios({
      headers: {'Authorization': `Bearer ${process.env.API_TOKEN}`},
      method: 'get',
      url: `https://api.petfinder.com/v2/animals?type=${value}&page=1&limit=1`,
      responseType: 'json'
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        maxRows={4}
        value={value}
        onChange={handleChange}
      />
      <Button onClick={handleOnClick} variant="contained" color="primary">
        Search
      </Button>
    </form>
  )
}

export default Search