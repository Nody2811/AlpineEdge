import React from 'react'
import styles from './Team.module.css'
import AboutSwiper from '../../components/Swiper'
import Main from '../../components/Main'
import teamData from './teamData';

const TeamSection = () => {
  return (
    <div className={styles.teamSec}>
        <Main 
            subtitle='Team Member'
            title='Our Team '
            paragraph='Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.'
        
            align='center'
            isDark={false}
        />

        <AboutSwiper slides={teamData}/>
    </div>
  )
}

export default TeamSection