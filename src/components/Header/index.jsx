import React from 'react'
import logo from '../../img/logo.svg'
import styles from './Header.module.css';
import NavMenu from '../NavMenu';
import mobileMenuIcon from '../../img/mobile_menu.svg'

const Header = () => {
  return (
    <div className={styles.header}>
        <img src={logo} className={styles.logo} />
        <NavMenu className={styles.mobileHide}/>
        <a href="#" className={`${styles.contactButton} ${styles.mobileHide}`}>Contact Us</a>
    
        <img src={mobileMenuIcon} className={styles.mobileMenuIcon} />
    </div>
  )
}

export default Header