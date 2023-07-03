import React from 'react'
import Main from '../../components/Main'
import styles from './Intro.module.css'
import introImg from '../../img/intro.svg'

const IntoductionSection = () => {
  return (
    <div className={styles.introSec}>
        <Main 
            className={styles.introMain}
            subtitle='Introducktion'
            title='Securing Your <span>Digital Future</span>'
            paragraph='Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular.'

            align='left'
            isDark={true}
        />
        <a href="#">Get Started Now</a>
        <img src={introImg} alt="" />
    </div>
  )
}

export default IntoductionSection