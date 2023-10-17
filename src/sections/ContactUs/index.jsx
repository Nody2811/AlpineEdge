import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'
import api from '../../services';
import Alert from 'react-bootstrap/Alert';

const ContactUsSection = (props) => {
    const [name, setName] = useState("")
    const [business, setBusiness] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")

    const [submitMsg, setsubmitMsg] = useState({
        showModal: false,
        variant: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = {name, business, contact, message};

        api.post('/contact-us', formData)
        .then((response) => {
            console.log('Response data:', response.data);

            setsubmitMsg({
                showModal: true,
                variant: "success",
                message: "Email sent successfully."
            });
        })
        .catch((error) => {
            console.error('Error:', error);

            setsubmitMsg({
                showModal: true,
                variant: "danger",
                message: `Please try again or contact us at <a href="#">info@alpineege.ch</a>.`
            });
        });
        
        setTimeout(() => {
            handleCloseModal();
        }, 20000);
    }

    const handleCloseModal = () => {
        setsubmitMsg({
            showModal: false,
            variant: "",
            message: ""
        });
    }
    
  return (
    <div className={styles.contactSec} id={props.sectionId ?? ""}>
        <Main
            className={styles.contactMain}
            subtitle='Kontakt'
            title='Kontaktieren sie uns'
            align='center'
            isDark={false}
        />

        {submitMsg.showModal && (
            <Alert 
                variant={submitMsg.variant} 
                onClick={() => handleCloseModal()} 
                dismissible
                style={{
                    maxWidth: "1120px",
                    position: "relative",
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
            >
                <div dangerouslySetInnerHTML={{ __html: submitMsg.message }} />
            </Alert>
        )}

        <form onSubmit={handleSubmit}>
            <div className={styles.flexbox}>
                <div className={styles.inputBox}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id='name' 
                        placeholder='Vor- und Nachname'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="business">Unternehmen</label>
                    <input 
                        type="text" 
                        id='business' 
                        placeholder='Name des Unternehmens'
                        onChange={(e) => setBusiness(e.target.value)}
                    />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="contact">E-mail oder Telefonnumer</label>
                    <input 
                        type="text" 
                        id='contact' 
                        placeholder='E-Mail oder Telefonnumer'
                        onChange={(e) => setContact(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">Ihre Mitteilung</label>
                    <textarea 
                        id="message" 
                        placeholder='Wobei können wir Ihnen helfen? beschreiben sie Ihr bedürfnis kurz und jemand aus unserem Team meldet sich raschmöglichst bei Ihnen'
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="Absenden" />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection