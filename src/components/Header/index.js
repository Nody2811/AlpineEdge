import React from 'react'
import logo from '../../img/logo.svg'
import styles from './Header.module.css';
import NavMenu from '../NavMenu';

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} alt="logo" />
        <NavMenu />
        <a href="#" className={styles.contactButton}>Contact Us</a>
    </div>
  )
}

export default Header