// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar({ userName, isLoggedIn, onLogout }) {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component={Link} to="/">
            Insight Hub Dashboard
          </Typography>
          <Typography sx={{ flexGrow: 1 }} />
          {isLoggedIn ? (
            <>
              <Typography gutterBottom>{userName}</Typography>
              <Avatar />
              <Button color="inherit" onClick={onLogout}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
        </Toolbar>
      </AppBar>
    );
  }

export default Navbar;
