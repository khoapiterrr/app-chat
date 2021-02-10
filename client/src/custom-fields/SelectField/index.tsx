import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';
import React, { FC } from 'react';
import { isEmpty } from 'utils/common';

interface IProps {
  value: any;
  options?: any[];
  disabled?: boolean;
  color?: 'primary' | 'secondary';
  id?: string;
  variant?: 'standard' | 'outlined' | 'filled';

  defaultValue?: string;
  label?: string;

  field?: any;
  form?: any;
  [extraProps: string]: any;
}
const SelectField: FC<IProps> = (props: IProps) => {
  const {
    field,
    form,
    label,
    variant,
    color,
    defaultValue,
    multiline,
    disabled,
    options,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  const handleChange = (e: any) => {
    console.log(e.target.value, 'e.target.value');
    console.log(form, 'form');
    form.setFieldValue(name, e.target.value);
  };
  // useEffect(() => {

  // },[])
  return (
    <>
      <FormControl
        className='w-100'
        color={color}
        disabled={disabled}
        variant={variant}
        error={showError}>
        <InputLabel id='demo-simple-select-outlined-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-outlined-label'
          id='demo-simple-select-outlined'
          // value={state}
          multiple={multiline}
          onChange={(event) => handleChange(event)}
          label={label}>
          {isEmpty(defaultValue) ? null : (
            <MenuItem value=''>
              <em>{defaultValue}</em>
            </MenuItem>
          )}

          {options?.map((el) => (
            <MenuItem value={el.id}>{el.title}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{showError ? errors[name] : ''}</FormHelperText>
      </FormControl>
    </>
  );
};

SelectField.defaultProps = {
  type: 'text',
  disabled: false,
  color: 'secondary',
  id: 'outlined-basic',
  variant: 'outlined',
  multiline: false,
};
export default SelectField;
