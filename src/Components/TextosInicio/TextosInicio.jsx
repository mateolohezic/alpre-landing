import React from 'react'
import './textosInicio.css'
import icono from '../../assets/icono.svg'
import imagen from '../../assets/CaracteristicasInicio.webp'
import alpreMain from '../../assets/alpreMain.webp'
import alpreElec from '../../assets/alpreElec.webp'
import alpreMetal from '../../assets/alpreMetal.webp'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function TextosInicio() {
  return (
    <>
      <div className='contenedorTextos'>
        <div className='textoInicio1'>
          <p>MAS DE 20 AÑOS DEDICADOS A LA CONSTRUCCIÓN DE OBRAS DE ARQUITECTURA E INGENIERÍA PARA EL SECTOR PÚBLICO E INDUSTRIAL.</p>
        </div>
        <div className='imagenInicio2'>
          <LazyLoadImage
            alt='Características ALPRE S.A.'
            src={imagen}
          />
        </div>
        <div className='textoInicio2'>
          <p>Compromiso con la excelencia, la rigurosidad técnica y el cumplimiento de los más altos estándares de calidad y plazos asumidos.</p>
        </div>
        <div className='imagenTextos'>
          <LazyLoadImage
            alt="Icono ALPRE S.A"
            src={icono}
          />
        </div>
      </div>
      <div className='contenedorLogosTextos'>
        <LazyLoadImage
          alt="ALPRE S.A. Construcciones y Servicios"
          src={alpreMain}
        />
        <LazyLoadImage
          alt="ALPRE S.A. Electromecánica"
          src={alpreElec}
        />
        <LazyLoadImage
          alt="ALPRE S.A. Metalurgica"
          src={alpreMetal}
        />
      </div>
    </>
  )
}

export default TextosInicio