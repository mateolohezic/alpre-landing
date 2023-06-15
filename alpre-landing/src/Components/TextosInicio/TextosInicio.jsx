import React from 'react'
import './textosInicio.css'
import icono from '../../assets/icono.svg'

function TextosInicio() {
  return (
    <>
      <div className='contenedorTextos'>
        <div className='textoInicio1'>
          <p>MAS DE 20 AÑOS DEDICADOS A LA CONSTRUCCIÓN DE OBRAS DE ARQUITECTURA E INGENIERÍA PARA EL SECTOR PÚBLICO E INDUSTRIAL</p>
        </div>
        <div className='textoInicio2'>
          <p>ARQUITECTURA <span>|</span> INGENIERÍA CIVIL <span>|</span> ELECTROMECÁNICA <span>|</span> METALÚRGICA</p>
        </div>
        <div className='textoInicio3'>
          <p>Compromiso con la excelencia, la rigurosidad técnica y el cumplimiento de los más altos estándares de calidad y plazos asumidos</p>
        </div>
        <div className='imagenTextos'><img src={icono} alt="Icono ALPRE S.A"/></div>
      </div>
    </>
  )
}

export default TextosInicio