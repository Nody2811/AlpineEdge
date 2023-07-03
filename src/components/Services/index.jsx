import React from 'react'
import styles from './Services.module.css'

const Services = (props) => {
  return (
    <div className={styles.services}>
        {props.services.map((service, index) => (
            <div className={styles.serviceBox} key={index}>
                <div className={styles.imgBox}>
                    <img src={service.icon} alt="" />
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Services