import React from 'react'
import styles from './Team.module.css'
import AboutSwiper from '../../components/Swiper'
import Main from '../../components/Main'
import teamData from './teamData';

const TeamSection = () => {
  return (
    <div className={styles.teamSec}>
        <Main 
            subtitle='Teammitglieder'
            title='Unser Team '
            paragraph='Unser junges Dynamisches Team hilf Ihnen ihre Ziele zu verwirklichen'
        
            align='center'
            isDark={false}
        />

        <AboutSwiper slides={teamData}/>
    </div>
  )
}

export default TeamSection