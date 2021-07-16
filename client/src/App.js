// Router imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory
} from 'react-router-dom'

// Page imports
import Favorites from './pages/Favorites'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Pets from './pages/Pets'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Search from './pages/Search'
import Share from './pages/Share'

const App = () => {
  return (
    <Router>
      <div>
        {/* <NavBar /> */}
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
            <Search />
          </Route>
          <Route path='/pets'>
            <Pets />
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
        </Switch>
      </div>
    </Router>
  )
}

export default App;
