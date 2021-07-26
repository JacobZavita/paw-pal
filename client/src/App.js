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
import Err from './pages/Err'

// component imports
import NavBar from './components/Drawer'
import { useState } from 'react'
import { grey } from '@material-ui/core/colors'

// theme
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#7189FF'
    },
    secondary: {
      main: '#C1CEFE'
    },
    text: {
      secondary: grey[400]
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
  const [chat, setChat] = useState({
    id: ''
  })
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
              <Favorites
                chat={chat}
                setChat={setChat}
              />
            </Route>
            <Route exact path='/share'>
              <Err />
            </Route>
            <Route path='/share/:id' render={(props) => <Share {...props} />} />
            <Route path='/chat'>
              <Chat
                chat={chat}
                chatPet={chat.pet}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
