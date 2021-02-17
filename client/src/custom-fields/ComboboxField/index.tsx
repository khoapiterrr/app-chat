import React, { FC } from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
interface IProps {
  options: any;

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
const ComboboxField: FC<IProps> = (props: IProps) => {
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
    options,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  return (
    <>
      <Autocomplete
        {...props}
        id='combo-box-demo'
        options={options}
        getOptionLabel={(option: any) => option.title}
        style={{ width: 300 }}
        renderInput={(params: any) => (
          <TextField
            className='w-100'
            {...params}
            color={color}
            disabled={disabled}
            label={label}
            variant={variant}
          />
        )}
      />
    </>
  );
};

ComboboxField.defaultProps = {};

export default ComboboxField;
