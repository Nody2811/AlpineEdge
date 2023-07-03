import React from 'react'
import Main from '../../components/Main'
import styles from './Service.module.css'
import Services from '../../components/Services';
import serviceData from './serviceData';

const ServiceSection = () => {
  return (
    <div className={styles.serviceSec}>
        <Main 
          className={styles.serviceMain}

            subtitle='Service'
            title='Services <span>Provided</span> by Us'
            paragraph='Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.'

            align='center'
            isDark={true}
        />
        <Services services={serviceData} />
    </div>
  )
}

export default ServiceSection