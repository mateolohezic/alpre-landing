import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Footer() {
  return (
    <>
        <footer className='footer'>
          <div>
            <div className='logoFooter'>
              <a href="/">
                
                <LazyLoadImage
                  alt='ALPRE S.A Logo'
                  src={logo}
                />
              </a>
            </div>
            <div className='urlFooter'><a href="/">www.alpresa.com.ar</a></div>
          </div>
        </footer>
    </>
  )
}

export default Footer