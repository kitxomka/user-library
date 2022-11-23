import React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className="nav-bar-text"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/">Users Library</Link>
          </Typography>
          <Typography className="nav-bar-btn">
            <Link to="/new-user">
              <Button color="inherit">Add New User</Button>
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
