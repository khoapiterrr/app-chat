import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import selectors from '../selectors';
const ContactingModal = () => {
  const dispatch = useDispatch();

  const caller = useSelector(selectors.selectCaller);
  const listener = useSelector(selectors.selectListener);
  const callStatus = useSelector(selectors.selectStatus);
  return <div className='ContactingModal'>
    
  </div>;
};

export default ContactingModal;
