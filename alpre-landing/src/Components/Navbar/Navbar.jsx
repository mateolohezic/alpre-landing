import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import './navbar.css'

function Navbar() {

    const [navbarClass, setNavbarClass] = useState('transparent-navbar');

    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.pageYOffset;
          const scrollThreshold = 1; // Adjust this value to change when the color change should happen
    
          if (scrollTop > scrollThreshold) {
            setNavbarClass('blue-navbar');
          } else {
            setNavbarClass('transparent-navbar');
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown ${navbarClass}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Logo Barra de Navegación" />
                    </a>
                    <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir" onClick={() => setOpen(!open)}>
                        <label className="burger" htmlFor="burgerButton">
                            <input type="checkbox" id="burgerButton"/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarPrincipal">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">INICIO</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">SERVICIOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">LA EMPRESA</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">QUIENES SOMOS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">CONTACTO</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar