import React, { MutableRefObject, useRef } from 'react';
import LogoWeb from 'assets/images/logo.png';
import CustomSvgIcons from 'components/CustomSvgIcons';

const LeftMenuBG = () => {
  const leftMenu: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const openMenu = (e: any) => {
    e.preventDefault();
    leftMenu.current!.classList.toggle('open');
  };
  return (
    <div className='fixed-sidebar' ref={leftMenu}>
      <div className='fixed-sidebar-left sidebar--small' id='sidebar-left'>
        <a href='02-ProfilePage.html' className='logo'>
          <div className='img-wrap'>
            <img src={LogoWeb} alt='Olympus' />
          </div>
        </a>
      </div>
    </div>
  );
};

export default LeftMenuBG;
