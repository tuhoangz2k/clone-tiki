import React from 'react';
import RegisterForm from '../RigisterForm';
import { useDispatch } from 'react-redux';
import { rigister } from '../../userSlice';
import { useSnackbar } from 'notistack';

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (value) => {
    try {
      value.username = value.email;

      const user = await dispatch(rigister(value)).unwrap();
      enqueueSnackbar('Đăng Ký Tài Khoản Thành Công', { variant: 'success', autoHideDuration: 1500 });
      const { closeDialog } = props;
      if (closeDialog) closeDialog();
      console.log(user);
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error', autoHideDuration: 2000 });
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
