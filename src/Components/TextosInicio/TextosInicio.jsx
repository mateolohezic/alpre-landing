import React from 'react'
import './textosInicio.css'
import icono from '../../assets/icono.svg'
import imagen from '../../assets/CaracteristicasInicio.png'
import alpreMain from '../../assets/alpreMain.png'
import alpreElec from '../../assets/alpreElec.png'
import alpreMetal from '../../assets/alpreMetal.png'

function TextosInicio() {
  return (
    <>
      <div className='contenedorTextos'>
        <div className='textoInicio1'>
          <p>MAS DE 20 AÑOS DEDICADOS A LA CONSTRUCCIÓN DE OBRAS DE ARQUITECTURA E INGENIERÍA PARA EL SECTOR PÚBLICO E INDUSTRIAL.</p>
        </div>
        <div className='imagenInicio2'>
          <img src={imagen} alt="Características Alpre" />
        </div>
        <div className='textoInicio2'>
          <p>Compromiso con la excelencia, la rigurosidad técnica y el cumplimiento de los más altos estándares de calidad y plazos asumidos.</p>
        </div>
        <div className='imagenTextos'><img src={icono} alt="Icono ALPRE S.A"/></div>
      </div>
      <div className='contenedorLogosTextos'>
        <img src={alpreMain} alt="ALPRE S.A. Construcciones y Servicios" />
        <img src={alpreElec} alt="ALPRE S.A. Electromecánica" />
        <img src={alpreMetal} alt="ALPRE S.A. Metalurgica" />
      </div>
    </>
  )
}

export default TextosInicio