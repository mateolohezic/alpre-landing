import React from 'react'
import CarouselPortada from '../../Components/CarouselPortada/CarouselPortada'
import TextosInicio from '../../Components/TextosInicio/TextosInicio'
import Navbar from '../../Components/Navbar/Navbar';
import './home.css'
import ServiciosObras from '../../Components/ServiciosObras/ServiciosObras';
import LaEmpresa from '../../Components/LaEmpresa/LaEmpresa';

function Home() {
  return (
    <>
      {/* <div className="bg"></div> */}
      <Navbar/>
      <CarouselPortada/>
      <TextosInicio/>
      <ServiciosObras/>
      <LaEmpresa/>
    </>
  )
}

export default Home