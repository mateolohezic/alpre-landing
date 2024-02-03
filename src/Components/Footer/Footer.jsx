import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <>
        <footer className='footer'>
          <div>
            <div className='logoFooter'><a href="/"><img src={logo} alt="Logo ALPRE Footer" /></a></div>
            <div className='urlFooter'><a href="/">www.alpresa.com.ar</a></div>
          </div>
        </footer>
    </>
  )
}

export default Footer