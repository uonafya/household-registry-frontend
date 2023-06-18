import { Outlet, Link } from "react-router-dom";
// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Layout = () => {
  return (
    <>
      <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start"
                        // className={classes.menuButton}
                        color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    
                </Toolbar>
            </AppBar>

      <Outlet />
    </>
  )
};

export default Layout;