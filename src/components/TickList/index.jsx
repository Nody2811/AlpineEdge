import React from 'react'
import styles from './Ticks.module.css'
import tickImg from '../../img/tick.svg'

const TickList = (props) => {
  return (
    <div 
      className={`
        ${styles.tickList}
        ${props.isDark ? styles.dark : ""} 
        ${props.className ? props.className : ""}
      `}
    >
      {props.ticks.map((item, i) =>(
        <div className={styles.tick} key={i}>
          <img src={tickImg} alt="" />

          <div className={styles.info}>
              <h3>{item.title}</h3>
              <p>{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TickList