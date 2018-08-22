import React from 'react';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <a href='/'><img src='./logo_transparent.png' alt='logo' height='120' width='120'/></a>
      <Menu />
    </header>
  )
}

export default Header;