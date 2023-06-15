import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='contactoFooter'>
                <h4><i className="bi bi-telephone-fill"></i>+54 9 381 427 6572</h4>
                <h4><i className="bi bi-envelope-fill"></i>info@alpresa.com.ar</h4>
                <h4><i className="bi bi-geo-alt-fill"></i>Tucumán, Argentina</h4>
            </div>
            <div className='urlFooter'>www.alpresa.com.ar</div>
            <div className='logoFooter'><img src={logo} alt="Logo ALPRE Footer" /></div>
        </footer>
    </>
  )
}

export default Footer