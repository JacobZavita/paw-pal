import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import { Button, Typography, Card, CardContent, Grid } from '@material-ui/core'
import AccordionDisplay from '../../components/AccordionDisplay'
import { Client } from '@petfinder/petfinder-js'
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { Link as Lnk } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      // margin: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: '97%'
  }
}))

const Search = props => {
  const classes = useStyles()

  const [value, setValue] = useState('')

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  // define filters here, must also define them in AdvancedSelect.js
  const [filterState, setFilterState] = useState({
    breed: '',
    gender: '',
    size: '',
    age: '',
    good_with_children: false,
    good_with_dogs: false,
    good_with_cats: false
  })

  const callbackFunction = childData => {
    setFilterState(childData)
  }

  const handleOnClick = event => {
    event.preventDefault()
    // query petfinder api via petfinder-js-sdk
    const client = new Client({ apiKey: process.env.REACT_APP_API_KEY, secret: process.env.REACT_APP_SECRET})

    let query = {
      type: value,
      location: '92617',
      page: 1,
      limit: 100,
      // default limit is 20 results
    }

    // applies filters to search query, the keys are Petfinder API query parameters
    for (const[key, value] of Object.entries(filterState)) {
      if(typeof value === 'string') {
        if(value.length) {
          query[key] = value
        }
      }
      else if(typeof value == 'boolean') {
        if (value) {
          query[key] = value
        }
      }
    }

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
  }

  const testOnClick = () => {
    console.log(props.petState)
  }

  return (
    <>
      <Typography
        gutterBottom
        variant='h4'
        align='center'
        style={{ margin: '75px auto 15px auto' }}
      >
        Find Your New Friend
      </Typography>
      <Card style={{ maxWidth: 500, margin: '0 auto', padding: '20px 5px' }}>
        <CardContent>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Select Animal Type</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                  >
                    <MenuItem value={''}>&nbsp;&nbsp;</MenuItem>
                    <MenuItem value={'dog'}>Dog</MenuItem>
                    <MenuItem value={'cat'}>Cat</MenuItem>
                    <MenuItem value={'rabbit'}>Rabbit</MenuItem>
                    <MenuItem value={'horse'}>Horse</MenuItem>
                    <MenuItem value={'bird'}>Bird</MenuItem>
                  </Select>
                </FormControl>
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
                <Typography
                  variant='body2'
                  component='p'
                  align='center'
                  style={{ marginTop: '10px' }}
                >
                  <Lnk to='/pets'>
                    Pets
                  </Lnk>
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
