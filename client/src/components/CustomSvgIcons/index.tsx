import React from 'react';
import Icons from 'assets/svg-icons/sprites/icons.svg';

interface IProps {
  id?: string;
  [extraProps: string]: any;
}

const CustomSvgIcons: React.FC<IProps> = ({ id, ...rest }) => {
  return (
    <svg
      className={id}
      {...rest}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'>
      <use xlinkHref={`${Icons}#${id}`} />
    </svg>
  );
};

export default CustomSvgIcons;
