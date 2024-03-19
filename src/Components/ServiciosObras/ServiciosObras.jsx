import React, { useEffect, useState } from 'react'
import './serviciosObras.css'
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import CarouselServicio from '../CarouselServicio/CarouselServicio'
import arquitectura1 from '../../assets/Arquitectura/1.webp'
import arquitectura2 from '../../assets/Arquitectura/2.webp'
import arquitectura3 from '../../assets/Arquitectura/3.webp'
import arquitectura4 from '../../assets/Arquitectura/4.webp'
import arquitectura5 from '../../assets/Arquitectura/5.webp'
import arquitectura6 from '../../assets/Arquitectura/6.webp'
import civil1 from '../../assets/IngCivil/1.webp'
import civil2 from '../../assets/IngCivil/2.webp'
import civil3 from '../../assets/IngCivil/3.webp'
import civil4 from '../../assets/IngCivil/4.webp'
import civil5 from '../../assets/IngCivil/5.webp'
import civil6 from '../../assets/IngCivil/6.webp'
import electromecanica1 from '../../assets/Electromecanica/1.webp'
import electromecanica2 from '../../assets/Electromecanica/2.webp'
import electromecanica3 from '../../assets/Electromecanica/3.webp'
import electromecanica4 from '../../assets/Electromecanica/4.webp'
import electromecanica5 from '../../assets/Electromecanica/5.webp'
import electromecanica6 from '../../assets/Electromecanica/6.webp'
import electromecanica7 from '../../assets/Electromecanica/7.webp'
import metalurgica1 from '../../assets/Metalúrgica/1.webp'
import metalurgica2 from '../../assets/Metalúrgica/2.webp'
import metalurgica3 from '../../assets/Metalúrgica/3.webp'
import metalurgica4 from '../../assets/Metalúrgica/4.webp'
import metalurgica5 from '../../assets/Metalúrgica/5.webp'
import metalurgica6 from '../../assets/Metalúrgica/6.webp'


function ServiciosObras() {

  const imgArquitectura = [ arquitectura1, arquitectura2, arquitectura3, arquitectura4, arquitectura5, arquitectura6 ]
  const imgArquitecturaXL = [ arquitectura2, arquitectura3, arquitectura4, arquitectura5, arquitectura6 ]
  const imgCivil = [ civil1, civil2, civil3, civil4, civil5, civil6 ]
  const imgCivilXL = [ civil2, civil3, civil4, civil5, civil6 ]
  const imgElectromecanica = [ electromecanica1, electromecanica2, electromecanica3, electromecanica4, electromecanica5, electromecanica6, electromecanica7 ]
  const imgElectromecanicaXL = [ electromecanica2, electromecanica3, electromecanica4, electromecanica5, electromecanica6, electromecanica7 ]
  const imgMetalurgica = [ metalurgica1, metalurgica2, metalurgica3, metalurgica4, metalurgica5, metalurgica6 ]
  const imgMetalurgicaXL = [ metalurgica2, metalurgica3, metalurgica4, metalurgica5, metalurgica6 ]

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
        <LazyLoadComponent>
          <div className='itemServicio' id='arquitecturaServicio'>
            <div className='infoItemServicio'>
              <div className='textoItemServicio'>
                <h2>ARQUITECTURA</h2>
                <ul>
                  <li>Edificios comerciales y oficinas de distintas dimensiones.</li>
                  <li>Complejos residenciales y edificios en altura.</li>
                  <li>Pisos industriales y estructuras de hormigón elaborado.</li>
                  <li>Barrios de viviendas con infraestructura de servicios.</li>
                  <li>Escuelas, hospitales y edificios públicos.</li>
                </ul>
              </div>
              <CarouselServicio imagenes={imgArquitecturaXL} id='carouselArquitecturaXL' desktop/>
            </div>
            <CarouselServicio imagenes={imgArquitectura} id='carouselArquitectura'/>
            <div className={`portadaServiciosObras portadaArquitectura ${ !isIphone && 'bgfixed'}`}></div>
          </div>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <div className='itemServicio' id='civilServicio'>
            <div className='infoItemServicio'>
              <div className='textoItemServicio'>
                <h2>INGENIERÍA CIVIL</h2>
                <ul>
                  <li>Redes de agua potable y cloaca.</li>
                  <li>Obra civil para naves industriales en general.</li>
                  <li>Infraestructura vial urbana y fabril, pavimentos de hormigón rígidos y flexibles.</li>
                  <li>Infraestructura de servicios: plazas, parques, cordón cuneta, veredas, caminaría y equipamiento urbano.</li>
                  <li>Canalizaciones pluviales.</li>
                  <li>Construcción e instalación de plantas de tratamiento de efluentes cloacales y de potabilización compactas.</li>
                </ul>
              </div>
              <CarouselServicio imagenes={imgCivilXL} id='carouselCivilXL' desktop/>
            </div>
            <CarouselServicio imagenes={imgCivil} id='carouselCivil'/>
            <div className={`portadaServiciosObras portadaCivil ${ !isIphone && 'bgfixed'}`}></div>
          </div>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <div className='itemServicio' id='electromecanicaServicio'>
            <div className='infoItemServicio'>
              <div className='textoItemServicio'>
                <h2>ELECTROMECÁNICA</h2>
                <ul>
                  <li>Alumbrado público.</li>
                  <li>Tendido aéreo y subterráneo de líneas de energía eléctrica de media y baja tensión y fibra óptica.</li>
                  <li>Estaciones transformadoras de hasta 132 KV.</li>
                  <li>Centros de distribución de 13.2 y 33 KV.</li>
                  <li>Diseño y ejecución de proyectos de energía fotovoltaica.</li>
                  <li>Instalación eléctrica para iluminación y fuerza motriz de edificios.</li>
                  <li>Electrificación rural.</li>
                  <li>Iluminación deportiva.</li>
                </ul>
              </div>
              <CarouselServicio imagenes={imgElectromecanicaXL} id='carouselElectromecanicaXL' desktop/>
            </div>
            <CarouselServicio imagenes={imgElectromecanica} id='carouselElectromecanica'/>
            <div className={`portadaServiciosObras portadaElectromecanica ${ !isIphone && 'bgfixed'}`}></div>
          </div>
        </LazyLoadComponent>
        <LazyLoadComponent>
          <div className='itemServicio' id='metalurgicaServicio'>
            <div className='infoItemServicio'>
              <div className='textoItemServicio'>
                <h2>METALÚRGICA</h2>
                <ul>
                  <li>Naves industriales de distintos tipos y luces</li>
                  <li>Estructuras metálicas de cubierta.</li>
                  <li>Contenedores y módulos metálicos residenciales, para acopio y/o oficinas.</li>
                  <li>Silos y construcciones especiales para la industria.</li>
                  <li>Accesorios para obras: andamios, moldes, rejas, escaleras metálicas, barandas, tapas de cámara, etc.</li>
                  <li>Aberturas de chapa y mixtas con madera: Distintos tipos estándar y a medida.</li>
                  <li>Carpintería de aluminio. Fabricación y colocación de aberturas de baja, media y alta prestación. Vidrios simples y DVH.</li>
                </ul>
              </div>
              <CarouselServicio imagenes={imgMetalurgicaXL} id='carouselMetalurgicaXL' desktop/>
            </div>
            <CarouselServicio imagenes={imgMetalurgica} id='carouselMetalurgica'/>
            <div className={`portadaServiciosObras portadaMetalurgica ${ !isIphone && 'bgfixed'}`}></div>
          </div>
        </LazyLoadComponent>
      </div>
    </>
  )
}

export default ServiciosObras