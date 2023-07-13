import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'

const ContactUsSection = () => {
    const [name, setName] = useState("")
    const [purpose, setPurpose] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

  return (
    <div className={styles.contactSec}>
        <Main
            className={styles.contactMain}
            subtitle='Contact Us'
            title='Let Us Know'
            align='center'
            isDark={false}
        />
        <form>
            <div className={styles.flexbox}>
                <div className={styles.inputBox}>
                    <label htmlFor="name">Your Full Name</label>
                    <input type="text" id='name' placeholder='Your Full Name'/>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="purpose">Your Purpose</label>
                    <input type="text" id='purpose' placeholder='Your Purpose'/>
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="email">Your Email Address</label>
                    <input type="text" id='email' placeholder='Your Email Address'/>
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">Your Messages</label>
                    <textarea id="message" placeholder='Your Messages'></textarea>
                </div>
                <input type="submit" value="Send Message" />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection