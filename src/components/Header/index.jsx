import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, IconButton, Toolbar, Box, Button, Menu, MenuItem } from '@mui/material';

import './styles.scss';
import { NavLink, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import Rigister from 'features/Auth/components/Rigister';
import CloseIcon from '@mui/icons-material/Close';
import Login from 'features/Auth/components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'features/Auth/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const MODE = { register: 'register', login: 'login' };
function Header(props) {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const isLogged = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setMode(MODE.register);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenLogin = () => {
    setMode(MODE.login);
    setOpen(true);
  };

  const handleLogout = () => {
    dispatch(logout());
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link className="header__link" to="/">
              {' '}
              <img
                className="header__logo"
                src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                alt=""
              />{' '}
            </Link>
          </Typography>

          <NavLink to="songs" className="header__nav-link">
            <Button color="inherit">Song list</Button>
          </NavLink>

          <NavLink to="todos" className="header__nav-link">
            <Button color="inherit">Todo list</Button>
          </NavLink>
          {!isLogged && (
            <React.Fragment>
              <Button color="inherit" onClick={handleClickOpen}>
                ????ng K??
              </Button>
              <Button color="inherit" onClick={handleClickOpenLogin}>
                ????ng Nh???p
              </Button>
            </React.Fragment>
          )}
          {isLogged && (
            <IconButton color="inherit" onClick={handleClick}>
              <AccountCircleIcon fontSize="medium" />
            </IconButton>
          )}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Dialog
        open={open}
        onClose={(e, reason) => {
          if (reason !== 'backdropClick' && reason !== 'escapeKeyDown') {
            setOpen(false);
          }
        }}
      >
        <DialogContent sx={{ position: 'relative' }}>
          <IconButton
            fontSize="medium"
            sx={{ position: 'absolute', top: 20, right: 15, zIndex: 1 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          {mode === MODE.register && <Rigister closeDialog={handleClose} />}
          {mode === MODE.login && <Login closeDialog={handleClose} />}
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => (mode === MODE.register ? setMode(MODE.login) : setMode(MODE.register))}>
              {mode === MODE.register ? '???? C?? T??i Kho???n. ????ng Nh???p Ngay' : 'Ch??a C?? T??i Kho???n. ????ng K?? Ngay'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Header;
