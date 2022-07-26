import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/FormControl/InputField';
import { Avatar, Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordField from 'components/FormControl/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
RegisterForm.defaultProps = {
  onSubmit: null,
};

const FormRigterComponent = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(1),
}));
const FormAvatar = styled(Avatar)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  backgroundColor: theme.palette.info.main,
}));
const TitleFormRigter = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  margin: theme.spacing(2, 0, 1, 0),
}));
const ButtonFormRigter = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2, 0),
}));

function RegisterForm(props) {
  const schema = yup.object().shape({
    fullName: yup
      .string()
      .required('Vui Lòng Nhập Tên')
      .test('should has at least two words', 'Họ tên phải có ít nhất 2 từ', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup
      .string()
      .required('vui Lòng Nhập Email ')
      .email('Trường Này Phải Là Email')
      .min(6, 'Phải Có Ít nhất 6 Ký Tự'),
    password: yup
      .string()
      .required('Vui Lòng Nhập Mật Khẩu')
      .min(8, 'Mật Khẩu Phải Có Ít nhất 8 Ký Tự')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
      ),
    retypePassword: yup
      .string()
      .required('Vui Lòng Nhập Lại Mật Khẩu')
      .oneOf([yup.ref('password'), null], 'Mật Khẩu Không Chính Xác'),
  });
  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    const { onSubmit } = props;
    if (!onSubmit) return;
    onSubmit(values);
    form.reset();
  };

  return (
    <FormRigterComponent>
      <FormAvatar>
        <LockOutlinedIcon></LockOutlinedIcon>
      </FormAvatar>

      <TitleFormRigter component="h3" variant="h6">
        Tạo Một Tài Khoản
      </TitleFormRigter>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <InputField name="fullName" form={form} label="Họ Tên" />
        <InputField name="email" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Mật Khẩu" />
        <PasswordField name="retypePassword" form={form} label="Nhập Lại Mật Khẩu" />
        <ButtonFormRigter type="submit" variant="contained" color="primary" fullWidth>
          Tạo tài khoản
        </ButtonFormRigter>
      </form>
    </FormRigterComponent>
  );
}

export default RegisterForm;
