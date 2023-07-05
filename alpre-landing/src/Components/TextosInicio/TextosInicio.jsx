import React from 'react'
import './textosInicio.css'
import icono from '../../assets/icono.svg'
import imagen from '../../assets/CaracteristicasInicio.png'

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
        <div className='textoInicio3'>
          <p>Excelencia, rigurosidad técnica y cumplimiento de los más altos estándares de calidad.</p>
        </div>
        <div className='imagenTextos'><img src={icono} alt="Icono ALPRE S.A"/></div>
      </div>
    </>
  )
}

export default TextosInicio