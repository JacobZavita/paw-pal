import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link, NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
// active icon link stuff
import { useLocation } from 'react-router-dom'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  logoLink: {
    color: '#f2f2f2',
    textDecoration: 'none'
  },
  linkColor: {
    color: '#758ecd',
    textDecoration: 'none'
  },
  activeLink: {
    color: '#A0DDFF'
  },
  activeBG: {
    backgroundColor: '#343433'
  }
}))


const NavBar = (props) => {
  // active link stuff
  const location = useLocation()

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem('token')
    window.location = '/login'
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
          <NavLink exact to='/' className={classes.logoLink}>
            PawPal
          </NavLink>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink to='/profile' className={classes.linkColor} activeClassName={classes.activeLink}>
            <ListItem button className={location.pathname === '/profile' && classes.activeBG}>
              <ListItemIcon>
                <AccountCircleIcon className={location.pathname === '/profile' ? classes.activeLink : classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                MyProfile
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to='/favorites' className={classes.linkColor} activeClassName={classes.activeLink}>
            <ListItem button className={location.pathname === '/favorites' && classes.activeBG}>
              <ListItemIcon>
                <FavoriteIcon className={location.pathname === '/favorites' ? classes.activeLink : classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                Favorites
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to='/search' className={classes.linkColor} activeClassName={classes.activeLink}>
            <ListItem button className={location.pathname === '/search' && classes.activeBG}>
              <ListItemIcon>
                <SearchIcon className={location.pathname === '/search' ? classes.activeLink : classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                Search
              </ListItemText>
            </ListItem>
          </NavLink>
        </List>
        <Divider />
          {(localStorage.getItem('token')) ? 
          (<Link className={classes.linkColor}>
            <ListItem button color='inherit' onClick={handleLogOut}>
              <ListItemIcon>
                <ExitToAppIcon className={classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                Logout
              </ListItemText>
            </ListItem>
          </Link>) :
          (<Link className={classes.linkColor} to='/login'>
            <ListItem button color='inherit'>
              <ListItemIcon>
                <VpnKeyIcon className={classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                Login
              </ListItemText>
            </ListItem>
          </Link>)}
      </Drawer>
    </div>
  );
}

export default NavBar