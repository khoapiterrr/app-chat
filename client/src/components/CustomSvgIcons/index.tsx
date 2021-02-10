import React from 'react';
import Icons from 'assets/svg-icons/sprites/icons.svg';
import { isEmpty } from 'utils/common';

interface IProps {
  id?: string;
  className?: string;
  [extraProps: string]: any;
}

const CustomSvgIcons: React.FC<IProps> = ({ id, className, ...rest }) => {
  return (
    <svg
      className={isEmpty(className) ? id : className}
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
};

export default CustomSvgIcons;
