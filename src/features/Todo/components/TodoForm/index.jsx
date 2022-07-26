import React from 'react';
import PropTypes from 'prop-types';
// import InputField from '../../../../components/FormControl/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from 'components/FormControl/InputField';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const schema = yup.object().shape({
    title: yup.string().required('please enter your title').min(5, 'min 5 chacracter'),
  });
  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const handleOnSubmit = (values) => {
    // console.log('formvalue', values);
    const { onSubmit } = props;
    if (!onSubmit) return;
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <InputField name="title" form={form} label="todo" />
    </form>
  );
}

export default TodoForm;
