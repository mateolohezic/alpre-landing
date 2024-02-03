import React, { useEffect, useState } from 'react'
import './serviciosObras.css'
import CarouselServicio from '../CarouselServicio/CarouselServicio'
import iconoAlpre from '../../assets/letraAverde.png'
import arquitectura1 from '../../assets/Arquitectura/arquitectura1.jpg'
import arquitectura2 from '../../assets/Arquitectura/arquitectura2.jpg'
import arquitectura3 from '../../assets/Arquitectura/arquitectura3.jpg'
import civil1 from '../../assets/IngCivil/civil1.jpg'
import civil2 from '../../assets/IngCivil/civil2.jpg'
import civil3 from '../../assets/IngCivil/civil3.jpg'
import electromecanica1 from '../../assets/Electromecanica/ElectromecanicaCortada1.jpg'
import electromecanica2 from '../../assets/Electromecanica/ElectromecanicaCortada2.jpg'
import electromecanica3 from '../../assets/Electromecanica/ElectromecanicaCortada3.jpg'
import metalurgica1 from '../../assets/Metalúrgica/metalurgica1.jpg'
import metalurgica2 from '../../assets/Metalúrgica/metalurgica2.jpg'
import metalurgica3 from '../../assets/Metalúrgica/metalurgica3.jpg'


function ServiciosObras() {

  const imgArquitectura = [ arquitectura1, arquitectura2, arquitectura3 ]
  const imgCivil = [ civil1, civil2, civil3 ]
  const imgElectromecanica = [ electromecanica1, electromecanica2, electromecanica3 ]
  const imgMetalurgica = [ metalurgica1, metalurgica2, metalurgica3 ]

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
        <div className='itemServicio'>
          <div className='infoItemServicio'>
            <h2>ARQUITECTURA</h2>
            <p>Construcción de barrios de viviendas.</p>
            <p>Escuelas y hospitales.</p>
            <p>Edificios de viviendas y comerciales de distintos niveles.</p>
            <p>Complejos turísticos residenciales.</p>
            <p>Estructuras de hormigón elaborado.</p>
          </div>
          <div className={`portadaServiciosObras portadaArquitectura ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='itemServicio'>
          <div className='infoItemServicio'>
            <h2>INGENIERÍA CIVIL</h2>
            <p>Redes de agua potable y cloaca.</p>
            <p>Infraestructura vial, pavimentos de hormigón rígidos y flexibles, y pisos industriales.</p>
            <p>Infraestructura de servicios, plazas, parques, equipamiento urbano, cordón cuneta, veredas y caminarías.</p>
            <p>Construcción e instalación de plantas de tratamiento de efluentes cloacales.</p>
            <p>Canalizaciones pluviales.</p>
          </div>
          <div className={`portadaServiciosObras portadaCivil ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='itemServicio'>
          <div className='infoItemServicio'>
            <h2>ELECTROMECÁNICA</h2>
            <p>Alumbrado público.</p>
            <p>Tendido de líneas aéreas y subterráneas de media y baja tensión.</p>
            <p>Estaciones transformadoras de hasta 132 KV.</p>
            <p>Montaje de subestaciones transformadoras.</p>
            <p>Centros de distribución de 13.2 y 33 KV.</p>
            <p>Instalación eléctrica para luz y fuerza motriz de edificios.</p>
            <p>Iluminación deportiva.</p>
            <p>Electrificación rural.</p>
          </div>
          <div className={`portadaServiciosObras portadaElectromecanica ${ !isIphone && 'bgfixed'}`}></div>
        </div>
        <div className='row itemServicio itemServicioReverse'>
          <div className='infoItemServicio'>
            <h2>METALÚRGICA</h2>
            <p>Naves industriales de distintos tipos y luces</p>
            <p>Estructuras metálicas de cubierta.</p>
            <p>Talleres de carpintería de chapa y aluminio. Especiales y estándar.</p>
            <p>Accesorios para obras: andamios, moldes, rejas, escaleras, metálicas, barandas, tapas de cámara, etc.</p>
          </div>
          <div className={`portadaServiciosObras portadaMetalurgica ${ !isIphone && 'bgfixed'}`}></div>
        </div>
      </div>
    </>
  )
}

export default ServiciosObras