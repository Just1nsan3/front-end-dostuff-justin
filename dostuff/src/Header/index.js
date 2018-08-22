import React from 'react';
import Menu from '../Menu';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <header className='header'>
      <Link to='/'><img src='./logo_transparent.png' alt='logo' height='120' width='120'/></Link>
      <Menu />
    </header>
  )
}

export default Header;