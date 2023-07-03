import React from 'react'
import styles from './Main.module.css'

const Main = (props) => {
    return (
        <div 
            className={`
                ${styles.main} 
                ${props.isDark && styles.dark} 
                ${props.align === "center" && styles.center}
                ${props.className && props.className}
            `}
        >
            <h6>{props.subtitle}</h6>
            <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
            <p>{props.paragraph}</p>
        </div>
    )
}

Main.defaultProps = {
    align: 'left',
    isDark: false,
}

export default Main