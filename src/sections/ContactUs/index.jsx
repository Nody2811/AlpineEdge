import React, { useState } from 'react'
import styles from './Contact.module.css'
import Main from '../../components/Main'
import api from '../../services';
import Alert from 'react-bootstrap/Alert';
import formMessages from './formMessages';

const ContactUsSection = (props) => {
    const [name, setName] = useState("")
    const [business, setBusiness] = useState("")
    const [contact, setContact] = useState("")
    const [message, setMessage] = useState("")

    const [inputError, setInputError] = useState([])
    const [submitMsg, setsubmitMsg] = useState({
        showModal: false,
        variant: "",
        message: ""
    })

    const handleValidation = () => {
        let errors = [];

        if (name === "") {
            errors.push({
                input: "name",
                message: formMessages.emptyName
            });
        }
        if(business === "") {
            errors.push({
                input: "business",
                message: formMessages.emptyBusiness
            });
        }
        if(contact === "") {
            errors.push({
                input: "contact",
                message: formMessages.emptyEmail
            });
        }else if(!contact.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
            errors.push({
                input: "contact",
                message: formMessages.invalidEmail
            });
        }
        if(message === "") {
            errors.push({
                input: "message",
                message: formMessages.emptyMessage
            });
        }

        setInputError(errors);
        return errors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(!handleValidation().length) {
            api.post('/contact-us', {name, business, contact, message})
            .then((response) => {
                console.log('Response data:', response.data);
                
                setsubmitMsg({
                    showModal: true,
                    variant: "success",
                    message: formMessages.success
                });
            })
            .catch((error) => {
                console.error('Error:', error);

                setsubmitMsg({
                    showModal: true,
                    variant: "danger",
                    message: formMessages.error
                });
            });
            
            setTimeout(() => {
                handleCloseModal();
            }, 20000);
        }
    }

    const handleCloseModal = () => {
        setsubmitMsg({
            showModal: false,
            variant: "",
            message: ""
        });
    }
    
    const hasError = (inputName) => {
        return inputError.find((el) => el.input === inputName);
    }

    const ErrorMessage = ({ inputName }) => {
        const error = hasError(inputName);
        return error ? <p className={styles.errorMsg}>{error.message}</p> : null;
    };

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
                        style={hasError("name") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="name" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="business">Unternehmen</label>
                    <input 
                        type="text" 
                        id='business' 
                        placeholder='Name des Unternehmens'
                        onChange={(e) => setBusiness(e.target.value)}
                        style={hasError("business") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="business" />
                </div>
                <div className={styles.inputBox}>
                    <label htmlFor="contact">E-mail oder Telefonnumer</label>
                    <input 
                        type="text" 
                        id='contact' 
                        placeholder='E-Mail oder Telefonnumer'
                        onChange={(e) => setContact(e.target.value)}
                        style={hasError("contact") && {borderColor: "#f1aeb5"}}
                    />
                    <ErrorMessage errors={inputError} inputName="contact" />
                </div>
            </div>
            <div className={styles.flexbox}>
                <div className={`${styles.inputBox} ${styles.messageBox}`}>
                    <label htmlFor="message">Ihre Mitteilung</label>
                    <textarea 
                        id="message" 
                        placeholder='Wobei können wir Ihnen helfen? beschreiben sie Ihr bedürfnis kurz und jemand aus unserem Team meldet sich raschmöglichst bei Ihnen'
                        onChange={(e) => setMessage(e.target.value)}
                        style={hasError("message") && {borderColor: "#f1aeb5"}}
                    ></textarea>
                    <ErrorMessage errors={inputError} inputName="message" />
                </div>
                <input type="submit" value="Absenden" />
            </div>
        </form>
    </div>
  )
}

export default ContactUsSection