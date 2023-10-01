import React from 'react'
import styles from './NavMenu.module.css';

const NavMenu = (props) => {
  return (
    <div className={`${styles.navmenu} ${props?.className}`}>
        <a href="#">Home</a>
        <a href="#">Über uns</a>
        <a href="#">Angebot</a>
        <a href="#">Kontakt</a>
    </div>
  )
}

export default NavMenu