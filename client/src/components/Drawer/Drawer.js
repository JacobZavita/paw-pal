import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, AppBar, Toolbar, CssBaseline, List, Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { Link, NavLink } from 'react-router-dom'

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
    color: '#A0DDFF',
    textDecoration: 'none'
  },
  activeLink: {
    color: '#7189FF'
  }
}))

const NavBar = (props) => {
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
          <NavLink to='/profile' className={classes.linkColor} activeClassName={classes.activeLink} onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon className={classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                MyProfile
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to='/favorites' className={classes.linkColor} activeClassName={classes.activeLink} onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon className={classes.linkColor} />
              </ListItemIcon>
              <ListItemText>
                Favorites
              </ListItemText>
            </ListItem>
          </NavLink>
          <NavLink to='/search' className={classes.linkColor} activeClassName={classes.activeLink} onClick={handleDrawerClose}>
            <ListItem button>
              <ListItemIcon>
                <SearchIcon className={classes.linkColor} />
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