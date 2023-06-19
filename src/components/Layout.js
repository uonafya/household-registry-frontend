import { Outlet, Link } from "react-router-dom";
import {useState} from 'react';

// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import { MenuItem } from "@material-ui/core";

const Layout = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="static">
                <Toolbar variant="dense">
                    
                    <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                          >
                            <MenuIcon />
                      </IconButton>
                          <Menu
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                          >
                            <MenuItem onClick={handleMenuClose}>
                              <Link to="/">Home</Link>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <Link to="/CreatePerson">Create Person</Link>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <Link to="/LoginForm">Login</Link>
                            </MenuItem>

                            <MenuItem onClick={handleMenuClose}>
                              <Link to="/HouseHoldRegistration">Create HouseHold</Link>
                            </MenuItem>

                          </Menu>
                </Toolbar>
            </AppBar>

      <Outlet />
    </>
  )
};

export default Layout;