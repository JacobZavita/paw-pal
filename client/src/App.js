// Router imports
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Redirect,
  // useHistory
} from 'react-router-dom'

// MUI imports
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

// Page imports
import Favorites from './pages/Favorites'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Pets from './pages/Pets'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Search from './pages/Search'
import Share from './pages/Share'
import Chat from './pages/Chat'

// component imports
import NavBar from './components/Drawer'
import { useState } from 'react'

// theme
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7189FF'
    },
    secondary: {
      main: '#624CAB'
    },
    text: {
      secondary: '#7189FF'
    }
  },
  typography: {
    h4: {
      fontWeight: 200
    },
    h6: {
      fontWeight: 100
    }
  }
})

const App = () => {
  const [petState, setPetState] = useState({
    pet: {},
    pets: []
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/register'>
              <Register />
            </Route>
            <Route path='/search'>
              <Search
                pets={petState.pets}
                setPetState={setPetState}
                petState={petState}
              />
            </Route>
            <Route path='/pets'>
              <Pets 
                pet={petState.pet}
                pets={petState.pets}
                setPetState={setPetState}
                petState={petState}
              />
            </Route>
            <Route path='/profile'>
              <Profile />
            </Route>
            <Route path='/favorites'>
              <Favorites />
            </Route>
            <Route path='/share'>
              <Share />
            </Route>
            <Route path='/chat'>
              <Chat />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
