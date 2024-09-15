import React from 'react'
import './Intro.css'
import imgIntro from '../images/clavier-gaming.jpeg'

function Intro() {
  return (
    <>
    <div className='intro-container'>
        <img src={imgIntro} alt="clavier gaming logitech" className='image-intro'/>
        <div className="intro-text-container">
            <h1 className='intro-title'>Qualité avant tout</h1>
            <p className='intro-text'>
                Créateur de périphérique informatiques depuis 1981. 
                Logitech cherche constamment à améliorer ses produits tout en garantissant sa qualité.
            </p>
        </div>
    </div>
    </>
  )
}

export default Intro
