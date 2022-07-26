import React from 'react';
import RegisterForm from '../RigisterForm';
import { useDispatch } from 'react-redux';
import { rigister } from '../../userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
function Register(props) {
  const dispatch = useDispatch();
  const handleSubmit = async (value) => {
    try {
      value.username = value.fullname;
      const user = await dispatch(rigister(value)).unwrap();
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
}

export default Register;
