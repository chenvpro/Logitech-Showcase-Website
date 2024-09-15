import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
        <footer className="footer-container">
            <div className="footer-band">
                <div className="footer-info-category">
                    <div className="footer-category">
                        <h4 className="footer-title">à propos</h4>
                        <div className="items-container">
                            <p className='footer-item'>Qui nous sommes ?</p>
                            <p className='footer-item'>Carrières</p>
                            <p className='footer-item'>Investisseurs</p>
                            <p className='footer-item'>Conditions générales d'utilisation</p>
                        </div>
                    </div>
                    <div className="footer-category">
                        <h4 className="footer-title">contactez-nous</h4>
                        <div className="items-container">
                            <p className='footer-item'>Contact</p>
                            <p className='footer-item'>Support</p>
                            <p className='footer-item'>Destinations</p>
                            <p className='footer-item'>Sponsors</p>
                        </div>
                    </div>
                    <div className="footer-category">
                        <h4 className="footer-title">réseaux sociaux</h4>
                        <div className="items-container">
                            <p className='footer-item'>Instagram</p>
                            <p className='footer-item'>Facebook</p>
                            <p className='footer-item'>Youtube</p>
                            <p className='footer-item'>Twitter</p>
                        </div>
                    </div>
                </div>
                <hr className='mobile-bar'/>
                <div className="newsletter-container">
                    <h4 className="newsletter-title">Abonnez-vous à notre newsletter afin de vous tenir au courant de nos offres</h4>
                    <p className='newsletter-unsubscribe-text'>Vous pouvez vous désabonner à tout moment</p>
                    <input type="email" placeholder='votre email' className='newsletter-mail-input'/>
                    <button className='btn-subscribe'>S'abonner</button>
                </div>
            </div>
            <div className="footer-end">
                <p className='footer-copyright'>CopyRight © 2024. Tous Droits Réservés. </p>
                <p className='footer-policy-privacy'>Politique de confidentialité</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
