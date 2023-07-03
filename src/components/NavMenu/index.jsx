import React from 'react'
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  return (
    <div className={`${styles.navmenu} ${props?.className}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
    </div>
  )
}

export default NavMenu