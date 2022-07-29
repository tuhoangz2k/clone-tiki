import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/FormControl/InputField';
import { Avatar, Button, Typography, LinearProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PasswordField from 'components/FormControl/PasswordField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
  onSubmit: null,
};

const FormRigterComponent = styled('div')(({ theme }) => ({
  paddingTop: theme.spacing(3),
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

function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup.string().required('vui Lòng Nhập Email ').email('Trường Này Phải Là Email'),

    password: yup.string().required('Vui Lòng Nhập Mật Khẩu'),
  });
  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const { isSubmitting } = form.formState;
  const handleOnSubmit = async (values) => {
    const { onSubmit } = props;
    if (!onSubmit) return;
    await onSubmit(values);
  };

  return (
    <FormRigterComponent>
      {isSubmitting && <LinearProgress sx={{ marginBottom: 2 }} />}
      <FormAvatar>
        <LockOutlinedIcon></LockOutlinedIcon>
      </FormAvatar>

      <TitleFormRigter component="h3" variant="h6">
        Đăng Nhập
      </TitleFormRigter>
      <form onSubmit={form.handleSubmit(handleOnSubmit)}>
        <InputField name="identifier" form={form} label="Email" />
        <PasswordField name="password" form={form} label="Mật Khẩu" />
        <ButtonFormRigter disabled={isSubmitting} type="submit" variant="contained" color="primary" fullWidth>
          Đăng Nhập
        </ButtonFormRigter>
      </form>
    </FormRigterComponent>
  );
}

export default LoginForm;
