import React, { FC } from 'react';
import { TextField } from '@material-ui/core';

interface IProps {
  type?: string;
  disabled?: boolean;
  color?: string;
  id?: string;
  variant?: string;
  multiline?: boolean;
  defaultValue?: string;
  label?: string;

  field?: any;
  form?: any;
  [extraProps: string]: any;
}

const InputField: FC<IProps> = (props: IProps) => {
  const {
    field,
    form,
    type,
    label,
    variant,
    id,
    color,
    defaultValue,
    multiline,
    disabled,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <>
      <TextField
        {...props}
        className='w-100'
        id={id}
        type={type}
        label={label}
        variant={variant}
        color={color}
        disabled={disabled}
        defaultValue={defaultValue}
        multiline={multiline}
        error={showError}
        helperText={showError ? errors[name] : ''}
        {...field}
      />
    </>
  );
};

InputField.defaultProps = {
  type: 'text',
  disabled: false,
  color: 'secondary',
  id: 'outlined-basic',
  variant: 'outlined',
  multiline: false,
};

export default InputField;
