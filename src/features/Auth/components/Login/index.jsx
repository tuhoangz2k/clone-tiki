import React from 'react';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import { useSnackbar } from 'notistack';

function Login(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      value.username = value.email;

      const user = await dispatch(login(value)).unwrap();
      enqueueSnackbar('Đăng Nhập Thành Công', { variant: 'success', autoHideDuration: 1500 });
      const { closeDialog } = props;
      if (closeDialog) closeDialog();
    } catch (error) {
      enqueueSnackbar(`Đăng Nhập Thất Bại, Error:${error.message}`, {
        variant: 'error',
        autoHideDuration: 2000,
      });
    }
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Login;
