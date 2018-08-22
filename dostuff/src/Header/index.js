import React from 'react';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <img src='./logo_transparent.png' alt='logo' height='120' width='120'/>
      <Menu />
    </header>
  )
}

export default Header;