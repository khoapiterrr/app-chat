import React from 'react';
import { CircularProgress, CircularProgressProps } from '@material-ui/core';

const Spinner: React.FC<CircularProgressProps> = ({ color }) => (
  <CircularProgress color={color} />
);

export default Spinner;
