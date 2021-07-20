import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
// import axios from 'axios'
import { Button, Typography, Card, CardContent, Grid, TextField } from '@material-ui/core'
import AccordionDisplay from '../../components/AccordionDisplay'
import { Client } from '@petfinder/petfinder-js'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1)
    }
  }
}))

const Search = (props) => {
  const classes = useStyles()

  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // define filters here, must also define them in CheckboxInfo.js
  const [state, setState] = useState({
    pug: false,
    samoyed: false,
    small: false,
    medium: false,
    large: false,
    male: false,
    female: false
  })

  const callbackFunction = childData => {
    setState(childData)
  }

  const handleOnClick = event => {
    event.preventDefault()
    // query petfinder api via petfinder-js-sdk
    // NEED TO REPLACE apiKey and secret with values on dotenv
    // apikey: ebM3qj6GjEBSeVtG6E4W9Fi5kEXL5RP9f89j9zGUBBH43AowZf
    // secret: 4eGx1p1KMjIfoolHJBgqj8Z0bf4LD50XYnxQ0XNZ
    // const petfinder = require("@petfinder/petfinder-js")
    const client = new Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET})

    let query = {
      type: `${value}`,
      location: '92617',
      page: 1,
    }

    // applies filters to search query, the keys are Petfinder API query parameters
    // update these conditionals every time a query parameter is added
    if (state.pug) {
      query['breed'] = 'pug'
    }
    if (state.samoyed) {
      query['breed'] = 'samoyed'
    }
    if (state.small) {
      query['size'] = 'small'
    }
    if (state.medium) {
      query['size'] = 'medium'
    }
    if (state.large) {
      query['size'] = 'large'
    }
    if (state.male) {
      query['gender'] = 'male'
    }
    if (state.female) {
      query['gender'] = 'female'
    }

    client.animal.search(query)
      .then(({data}) => {
        // search data from petfinder
        let petfinder = data.animals
        console.log(petfinder)

        // current petState before adding anything
        const temp = [...props.petState.pets]
        console.log(temp)

        // code to add search data to petState.pets
        props.setPetState({ ...props.petState, pets: petfinder })

        console.log(props.petState)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const testOnClick = () => {
    console.log(props.petState)
  }

  return (
    <>
    <br></br>
    <br></br>
    <br></br>
      <Typography
        gutterBottom
        variant='h4'
        align='center'
        style={{ margin: '15px auto' }}
      >
        Find Your New Friend
      </Typography>
      <Card style={{ maxWidth: 500, margin: '0 auto', padding: '20px 5px' }}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  id="standard-multiline-flexible"
                  label="Dog, Cat, Bird, etc... "
                  variant='outlined'
                  value={value}
                  fullWidth
                  onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button
                  onClick={handleOnClick}
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Search
                </Button>
                <Typography
                  variant='body2'
                  component='p'
                  align='center'
                  style={{ marginTop: '10px' }}
                >
                  <AccordionDisplay advancedSearch="Yes" title="Advanced Search"
                    parentCallback={callbackFunction} />
                </Typography>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Search
