import React from 'react';
import * as yup from 'yup';
import QuantityField from 'components/FormControl/QuantityField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'ít nhất 1 số')
      .integer('phai la so nguyen')
      .positive()
      .required()
      .typeError('lam on nhap so'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleOnSubmit = async (values) => {
    if (!onSubmit) return;
    await onSubmit(values);
  };

  return (
    <form onSubmit={form.handleSubmit(handleOnSubmit)}>
      <QuantityField name="quantity" form={form} label="quantity" />
      <Button type="submit" variant="contained" color="primary" sx={{ display: 'block', width: 250 }}>
        Thêm Vào Giỏ Hàng
      </Button>
    </form>
  );
}

export default AddToCartForm;
