import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1 className="contact-title">Contactez-nous</h1>
        <hr />
        <div className="personal-data-container">
          <h2 className="personal-data-title">Infos Personnelles</h2>
          <div className="input-container">
            <div className="input-name-data">
              <input type="text" placeholder='votre nom' className='input firstname-input' />
              <input type="text" placeholder='votre prénom' className='input lastname-input' />
            </div>
            <div className='oneLine-input-container'>
              <input type="mail" placeholder='votre mail' className='input mail-input' />
              <textarea placeholder='pour quel motif nous contactez-vous ?' className='input message-textArea' />
            </div>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className='policy-checkbox'/>
            <p className='policy-text'>
              En cochant cette case, vous acceptez nos conditions générales d’utilisation. 
              Ainsi que notre politique de confidentialité.
            </p>
          </div>
          <div className="btn-container">
            <button className='btn-submit'>Envoyer</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
