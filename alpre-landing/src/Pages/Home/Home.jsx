import React from 'react'
import CarouselPortada from '../../Components/CarouselPortada/CarouselPortada'
import TextosInicio from '../../Components/TextosInicio/TextosInicio'
import Navbar from '../../Components/Navbar/Navbar';
import './home.css'
import ServiciosObras from '../../Components/ServiciosObras/ServiciosObras';
import LaEmpresa from '../../Components/LaEmpresa/LaEmpresa';
import QuienesSomos from '../../Components/QuienesSomos/QuienesSomos';
import Contacto from '../../Components/Contacto/Contacto';
import Footer from '../../Components/Footer/Footer';

function Home() {
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