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
        <div className='textosInicio'>
          <a href="/#arquitecturaServicio">
            <span>ARQUITECTURA</span>
            <small>
              Conoce más
              <i class="bi bi-arrow-right-short"></i>
            </small>
          </a>
          <span>|</span>
          <a href="/#civilServicio">
            <span>INGENIERÍA CIVIL</span>
            <small>
              Conoce más
              <i class="bi bi-arrow-right-short"></i>
            </small>
          </a>
          <span>|</span>
          <a href="/#electromecanicaServicio">
            <span>ELECTROMECÁNICA</span>
            <small>
              Conoce más
              <i class="bi bi-arrow-right-short"></i>
            </small>
          </a>
          <span>|</span>
          <a href="/#metalurgicaServicio">
            <span>METALÚRGICA</span>
            <small>
              Conoce más
              <i class="bi bi-arrow-right-short"></i>
            </small></a>
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