import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return(
    <div className='header__container'>
      <div className='header__logo'></div>
      <div className='header__title'>Petviser</div>
      <div className='header__nav-bar'>
        <div className='nav-bar__advert'></div>
        <div className='nav-bar__container'>
          <NavLink to='/'>Main</NavLink>
          <NavLink to='/about'>About</NavLink>
        </div>
        <div className='nav-bar__mobile'>
        </div>
      </div>
    </div>
  );
};

export default Header;
