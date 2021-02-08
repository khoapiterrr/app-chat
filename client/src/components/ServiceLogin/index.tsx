import React, { ReactNode } from 'react';
import { Button } from '@material-ui/core';

interface IProps {
  link?: string;
  icon?: ReactNode;
  label: ReactNode;
  id?: string;
}
const ServiceLogin: React.FC<IProps> = ({ id, link, icon, label }) => {
  const openWindowLogin = () => {
    window.open(link, '_self');
  };

  return (
    <Button
      id={id}
      variant='contained'
      className='w-100'
      onClick={openWindowLogin}
      size='large'
      color='secondary'>
      {icon} &nbsp; {label}
    </Button>
  );
};
export default ServiceLogin;
