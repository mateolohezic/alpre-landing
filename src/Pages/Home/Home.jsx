import React from 'react'
import CarouselPortada from '../../Components/CarouselPortada/CarouselPortada'
import TextosInicio from '../../Components/TextosInicio/TextosInicio'
import Navbar from '../../Components/Navbar/Navbar';
import './home.css'
import ServiciosObras from '../../Components/ServiciosObras/ServiciosObras';
import LaEmpresa from '../../Components/LaEmpresa/LaEmpresa';
import Contacto from '../../Components/Contacto/Contacto';
import Footer from '../../Components/Footer/Footer';

function Home() {

  // let isScrolling;

  // document.addEventListener('wheel', function(e) {
  //     e.preventDefault();
  
  //     clearTimeout(isScrolling);
  
  //     const scrollJump = window.innerHeight / 2;
  //     const scrollDirection = e.deltaY > 0 ? 1 : -1;
  
  //     isScrolling = setTimeout(() => {
  //         const newScrollPosition = window.scrollY + scrollJump * scrollDirection;
  //         window.scrollTo({
  //           top: newScrollPosition,
  //           behavior: 'smooth'
  //         });
  //     }, 50);
  // }, { passive: false });

  return (
    <>
      <Navbar/>
      <CarouselPortada/>
      <TextosInicio/>
      <ServiciosObras/>
      <LaEmpresa/>
      <Contacto/>
      <Footer/>
    </>
  )
}

export default Home