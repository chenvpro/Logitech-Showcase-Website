import React, {useState} from 'react'
import logo from '../images/logo-logitech.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <Link to='/' className='logo'>
                    <img src={logo} alt="logo de logitech" className="logitech-logo" />
                </Link>
            </div>
            <div className="burger-menu"  onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <div className="navbar-items">
                <ul className={click ? 'navbar-list' : 'navbar-list-active'}>
                    <Link to="/" className='nav-page' onClick={closeMobileMenu}>Accueil</Link>
                    <Link to="/produits" className='nav-page' onClick={closeMobileMenu}>Produits</Link>
                    <Link to="/contact" className='nav-page' onClick={closeMobileMenu}>Contact</Link>
                    <Link to="/connexion" className='nav-page login-page-mobile' onClick={closeMobileMenu}>Connexion/Inscription</Link>
                </ul>
            </div>
            <div className="navbar-inscription">
                <Link to="/connexion" className='nav-page login-page-desktop' onClick={closeMobileMenu}>Connexion/Inscription</Link>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
