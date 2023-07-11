import React from 'react'
import styles from './About.module.css'
import Main from '../../components/Main'
import aboutImg from '../../img/about.svg'
import TickList from '../../components/TickList'
import ticks from './tickListData'

const AboutSection = () => {
  return (
    <div className={styles.aboutSec}>
        <img src={aboutImg} alt="" className={styles.mobileShow} />

        <Main 
            className={styles.aboutMain}

            subtitle='About us'
            title='Comprehensive <span>IT Solutions</span> Tailored to Your Needs '
            paragraph='Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.'
            
            align='center'
            isDark={false}
        />

        <div className={styles.aboutContent}>
            <img src={aboutImg} alt="" />
            <TickList ticks={ticks} className={styles.aboutTickList}/>
        </div>
    </div>
  )
}
  

export default AboutSection;
