import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './styles.scss';
import { NavLink, Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rigister from 'features/Auth/components/Rigister';
function Header(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

          <Button color="inherit" onClick={handleClickOpen}>
            Đăng Ký
          </Button>
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
        <DialogContent>
          <Rigister />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Header;
