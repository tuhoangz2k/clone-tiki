import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, IconButton, Toolbar, Box, Button, Menu, MenuItem, Container, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles.scss';
import { NavLink, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { useNavigate } from 'react-router-dom';
import Rigister from 'features/Auth/components/Rigister';
import CloseIcon from '@mui/icons-material/Close';
import Login from 'features/Auth/components/Login';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'features/Auth/userSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { cartItemsCount } from 'features/Cart/selectors';

const MODE = { register: 'register', login: 'login' };
function Header(props) {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.current);
  const cartItems = useSelector(cartItemsCount);
  const isLogged = !!loggedInUser.id;
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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

  const handleNavigateToCart = () => {
    navigate('cart');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="header">
        <Container>
          <Toolbar className="toolbar">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} padding="0px">
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
                  Đăng Ký
                </Button>
                <Button color="inherit" onClick={handleClickOpenLogin}>
                  Đăng Nhập
                </Button>
              </React.Fragment>
            )}
            {isLogged && (
              <React.Fragment>
                <IconButton onClick={handleNavigateToCart} size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={cartItems} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleClick}>
                  <AccountCircleIcon fontSize="medium" />
                </IconButton>
              </React.Fragment>
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
        </Container>
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
              {mode === MODE.register ? 'Đã Có Tài Khoản. Đăng Nhập Ngay' : 'Chưa Có Tài Khoản. Đăng Ký Ngay'}
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default Header;
