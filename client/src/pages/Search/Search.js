import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { useState } from 'react'
// import axios from 'axios'
import { Button, Typography, Card, CardContent, Grid, Link } from '@material-ui/core'
import AccordionDisplay from '../../components/AccordionDisplay'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1)
    }
  }
}))

const Search = () => {
  const classes = useStyles()

  const [value, setValue] = useState()

  const handleChange = (event) => {
    setValue(event.target.value)
  }

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
    const petfinder = require("@petfinder/petfinder-js")
    const client = new petfinder.Client({ apiKey: "ebM3qj6GjEBSeVtG6E4W9Fi5kEXL5RP9f89j9zGUBBH43AowZf", secret: "4eGx1p1KMjIfoolHJBgqj8Z0bf4LD50XYnxQ0XNZ"})

    let query = `
      type: \`${value}\`,
      location: 92617,
      page: 1,
      limit: 1,
    `
    // if (state.pug) {
    //   query.concat(`\n breed: pug,`)
    // }

    // client.animal.search({
    //   type: `${value}`,
    //   location: '92617',
    //   page: 1,
    //   limit: 1,
    // })
    client.animal.search({query})
      .then(function (response) {
        console.log(response.data.animals)
        console.log(query)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const handleFilterDisplay = () => {
    console.log(JSON.stringify(state))
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
                <Button variant="contained" color="primary" onClick={handleFilterDisplay}>
                  Display Filters
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  )
}

export default Search