import React, { useEffect, useState } from 'react'
import './serviciosObras.css'
import CarouselServicio from '../CarouselServicio/CarouselServicio'
import arquitectura1 from '../../assets/Arquitectura/1.webp'
import arquitectura2 from '../../assets/Arquitectura/2.webp'
import arquitectura3 from '../../assets/Arquitectura/3.webp'
import arquitectura4 from '../../assets/Arquitectura/4.webp'
import arquitectura5 from '../../assets/Arquitectura/5.webp'
import civil1 from '../../assets/IngCivil/1.webp'
import civil2 from '../../assets/IngCivil/2.webp'
import civil3 from '../../assets/IngCivil/3.webp'
import electromecanica1 from '../../assets/Electromecanica/1.webp'
import electromecanica2 from '../../assets/Electromecanica/2.webp'
import electromecanica3 from '../../assets/Electromecanica/3.webp'
import electromecanica4 from '../../assets/Electromecanica/4.webp'
import electromecanica5 from '../../assets/Electromecanica/5.webp'
import electromecanica6 from '../../assets/Electromecanica/6.webp'
import electromecanica7 from '../../assets/Electromecanica/7.webp'
import electromecanica8 from '../../assets/Electromecanica/8.webp'
import metalurgica1 from '../../assets/Metalúrgica/1.webp'
import metalurgica2 from '../../assets/Metalúrgica/2.webp'
import metalurgica3 from '../../assets/Metalúrgica/3.webp'
import metalurgica4 from '../../assets/Metalúrgica/4.webp'
import metalurgica5 from '../../assets/Metalúrgica/5.webp'
import metalurgica6 from '../../assets/Metalúrgica/6.webp'
import metalurgica7 from '../../assets/Metalúrgica/7.webp'
import metalurgica8 from '../../assets/Metalúrgica/8.webp'
import metalurgica9 from '../../assets/Metalúrgica/9.webp'
import metalurgica10 from '../../assets/Metalúrgica/10.webp'


function ServiciosObras() {

  const imgArquitectura = [ arquitectura1, arquitectura2, arquitectura3, arquitectura4, arquitectura5 ]
  const imgArquitecturaXL = [ arquitectura2, arquitectura3, arquitectura4, arquitectura5 ]
  const imgCivil = [ civil1, civil2, civil3 ]
  const imgCivilXL = [ civil2, civil3 ]
  const imgElectromecanica = [ electromecanica1, electromecanica2, electromecanica3, electromecanica4, electromecanica5, electromecanica6, electromecanica7, electromecanica8 ]
  const imgElectromecanicaXL = [ electromecanica1, electromecanica2, electromecanica3, electromecanica4, electromecanica5, electromecanica6, electromecanica8 ]
  const imgMetalurgica = [ metalurgica1, metalurgica2, metalurgica3, metalurgica4, metalurgica5, metalurgica6, metalurgica7, metalurgica8, metalurgica9, metalurgica10 ]
  const imgMetalurgicaXL = [ metalurgica1, metalurgica2, metalurgica4, metalurgica5, metalurgica6, metalurgica7, metalurgica8, metalurgica9, metalurgica10 ]

  const [isIphone, setIsIphone] = useState(false)

  useEffect(() => {
      if (navigator.platform === 'iPhone' || navigator.platform === 'iPod' || navigator.platform === 'iPad' || navigator.platform === 'iPhone Simulator' || navigator.platform === 'iPod Simulator' || navigator.platform === 'iPad Simulator' || navigator.platform === 'Macintosh' || navigator.platform === 'MacIntel' || navigator.platform === 'MacAppleSilicon' || navigator.platform === 'MacPPC' || navigator.platform === 'Mac68K' || navigator.platform === 'Pike v7.6 release 92' || navigator.platform === 'Pike v7.8 release 517') {
          setIsIphone(true)
      }
  }, [])

  return (
    <>
      <div className='separacionTituloCategoria'></div>
      <div className='contenedorServicios'>
        <div className='tituloServiciosyObras' id="Servicios">SERVICIOS &amp; OBRAS</div>
        <div className='itemServicio' id='arquitecturaServicio'>
          <div className='infoItemServicio'>
            <div className='textoItemServicio'>
              <h2>ARQUITECTURA</h2>
              <ul>
                <li>Construcción de barrios de viviendas.</li>
                <li>Escuelas y hospitales.</li>
                <li>Edificios de viviendas y comerciales de distintos niveles.</li>
                <li>Complejos turísticos residenciales.</li>
                <li>Estructuras de hormigón elaborado.</li>
              </ul>
            </div>
            <CarouselServicio imagenes={imgArquitecturaXL} id='carouselArquitecturaXL' desktop/>
          </div>
          <CarouselServicio imagenes={imgArquitectura} id='carouselArquitectura'/>
          <div className={`portadaServiciosObras portadaArquitectura ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='itemServicio' id='civilServicio'>
          <div className='infoItemServicio'>
            <div className='textoItemServicio'>
              <h2>INGENIERÍA CIVIL</h2>
              <ul>
                <li>Redes de agua potable y cloaca.</li>
                <li>Infraestructura vial, pavimentos de hormigón rígidos y flexibles, y pisos industriales.</li>
                <li>Infraestructura de servicios, plazas, parques, equipamiento urbano, cordón cuneta, veredas y caminarías.</li>
                <li>Construcción e instalación de plantas de tratamiento de efluentes cloacales.</li>
                <li>Canalizaciones pluviales.</li>
              </ul>
            </div>
            <CarouselServicio imagenes={imgCivilXL} id='carouselCivilXL' desktop/>
          </div>
          <CarouselServicio imagenes={imgCivil} id='carouselCivil'/>
          <div className={`portadaServiciosObras portadaCivil ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='itemServicio' id='electromecanicaServicio'>
          <div className='infoItemServicio'>
            <div className='textoItemServicio'>
              <h2>ELECTROMECÁNICA</h2>
              <ul>
                <li>Alumbrado público.</li>
                <li>Tendido de líneas aéreas y subterráneas de media y baja tensión.</li>
                <li>Estaciones transformadoras de hasta 132 KV.</li>
                <li>Montaje de subestaciones transformadoras.</li>
                <li>Centros de distribución de 13.2 y 33 KV.</li>
                <li>Instalación eléctrica para luz y fuerza motriz de edificios.</li>
                <li>Iluminación deportiva.</li>
                <li>Electrificación rural.</li>
              </ul>
            </div>
            <CarouselServicio imagenes={imgElectromecanicaXL} id='carouselElectromecanicaXL' desktop/>
          </div>
          <CarouselServicio imagenes={imgElectromecanica} id='carouselElectromecanica'/>
          <div className={`portadaServiciosObras portadaElectromecanica ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='itemServicio' id='metalurgicaServicio'>
          <div className='infoItemServicio'>
            <div className='textoItemServicio'>
              <h2>METALÚRGICA</h2>
              <ul>
                <li>Naves industriales de distintos tipos y luces</li>
                <li>Estructuras metálicas de cubierta.</li>
                <li>Talleres de carpintería de chapa y aluminio. Especiales y estándar.</li>
                <li>Accesorios para obras: andamios, moldes, rejas, escaleras, metálicas, barandas, tapas de cámara, etc.</li>
              </ul>
            </div>
            <CarouselServicio imagenes={imgMetalurgicaXL} id='carouselMetalurgicaXL' desktop/>
          </div>
          <CarouselServicio imagenes={imgMetalurgica} id='carouselMetalurgica'/>
          <div className={`portadaServiciosObras portadaMetalurgica ${ !isIphone && 'bgfixed'}`}></div>
        </div>
      </div>
    </>
  )
}

export default ServiciosObras