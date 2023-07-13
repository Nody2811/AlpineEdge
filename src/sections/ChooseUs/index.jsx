import React from 'react'
import styles from './Choose.module.css'
import Main from '../../components/Main'
import TickList from '../../components/TickList'
import ticks from './tickListData'
import bg from '../../img/choose.svg'

const ChooseUsSection = ({children}) => {
  return (
    <div className={styles.chooseSec}>
        <div className={styles.container}>
            <Main 
                className={styles.chooseMain}
                subtitle='Why Choose Us'
                title='Partner with <span>AlpineEdge</span> for Your IT Needs'
                paragraph='Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc.'
                isDark={true}
            />
            <TickList 
                ticks={ticks} 
                isDark={true}
            />
        </div>
        <img src={bg} alt="" />
        {children}
    </div>
  )
}

export default ChooseUsSection
