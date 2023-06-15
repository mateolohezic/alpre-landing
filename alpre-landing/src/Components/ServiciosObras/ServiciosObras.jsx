import React from 'react'
import './serviciosObras.css'
import CarouselServicio from '../CarouselServicio/CarouselServicio'
import arquitectura1 from '../../assets/Arquitectura/arquitectura1.jpg'
import arquitectura2 from '../../assets/Arquitectura/arquitectura2.jpg'
import arquitectura3 from '../../assets/Arquitectura/arquitectura3.jpg'
import iconoArquitectura1 from '../../assets/Arquitectura/village.png'
import iconoArquitectura2 from '../../assets/Arquitectura/hospital.png'
import iconoArquitectura3 from '../../assets/Arquitectura/shopping-mall.png'
import iconoArquitectura4 from '../../assets/Arquitectura/resort.png'
import iconoArquitectura5 from '../../assets/Arquitectura/concrete.png'
import civil1 from '../../assets/IngCivil/civil1.jpg'
import civil2 from '../../assets/IngCivil/civil2.jpg'
import civil3 from '../../assets/IngCivil/civil3.jpg'
import iconoCivil1 from '../../assets/IngCivil/paver.png'
import iconoCivil2 from '../../assets/IngCivil/leak.png'
import iconoCivil3 from '../../assets/IngCivil/park.png'
import iconoCivil4 from '../../assets/IngCivil/sewer.png'
import iconoCivil5 from '../../assets/IngCivil/grating.png'
import electromecanica1 from '../../assets/Electromecanica/ElectromecanicaCortada1.jpg'
import electromecanica2 from '../../assets/Electromecanica/ElectromecanicaCortada2.jpg'
import electromecanica3 from '../../assets/Electromecanica/ElectromecanicaCortada3.jpg'
import iconoElectromecanica1 from '../../assets/Electromecanica/streetlight.png'
import iconoElectromecanica2 from '../../assets/Electromecanica/tower.png'
import iconoElectromecanica3 from '../../assets/Electromecanica/lighting.png'
import iconoElectromecanica4 from '../../assets/Electromecanica/plug.png'
import iconoElectromecanica5 from '../../assets/Electromecanica/dispenser.png'
import iconoElectromecanica6 from '../../assets/Electromecanica/chandelier.png'
import iconoElectromecanica7 from '../../assets/Electromecanica/spotlight.png'
import iconoElectromecanica8 from '../../assets/Electromecanica/rural.png'
import metalurgica1 from '../../assets/Metalúrgica/metalurgica1.jpg'
import metalurgica2 from '../../assets/Metalúrgica/metalurgica2.jpg'
import metalurgica3 from '../../assets/Metalúrgica/metalurgica3.jpg'
import iconoMetalurgica1 from '../../assets/Metalúrgica/vehicle.png'
import iconoMetalurgica2 from '../../assets/Metalúrgica/house.png'
import iconoMetalurgica3 from '../../assets/Metalúrgica/beam.png'
import iconoMetalurgica4 from '../../assets/Metalúrgica/tools.png'


function ServiciosObras() {
  return (
    <>
      <div className='tituloCategoria separacionTituloCategoria'>SERVICIOS &amp; OBRAS</div>
      <div className='contenedorServicios'>
        <div className='row itemServicio'>
          <div className='col-5'><CarouselServicio id="carruselArquitectura" imagen1={arquitectura1} imagen2={arquitectura2} imagen3={arquitectura3}/></div>
          <div className='col-7 infoItemServicio'>
            <h2>ARQUITECTURA</h2>
            <p><img src={iconoArquitectura1} alt="Icono Arquitectura" /> Construcción de barrios de viviendas.</p>
            <p><img src={iconoArquitectura2} alt="Icono Arquitectura" /> Escuelas y hospitales.</p>
            <p><img src={iconoArquitectura3} alt="Icono Arquitectura" /> Edificios de viviendas y comerciales de distintos niveles.</p>
            <p><img src={iconoArquitectura4} alt="Icono Arquitectura" /> Complejos turísticos residenciales.</p>
            <p><img src={iconoArquitectura5} alt="Icono Arquitectura" /> Estructuras de hormigón elaborado.</p>
          </div>
        </div>
        <div className='row itemServicio'>
          <div className='col-5'><CarouselServicio id="carruselCivil" imagen1={civil1} imagen2={civil2} imagen3={civil3}/></div>
          <div className='col-7 infoItemServicio'>
            <h2>INGENIERÍA CIVIL</h2>
            <p><img src={iconoCivil1} alt="Icono Civil" /> Redes de agua potable y cloaca.</p>
            <p><img src={iconoCivil2} alt="Icono Civil" /> Infraestructura vial, pavimentos de hormigón rígidos y flexibles, y pisos industriales.</p>
            <p><img src={iconoCivil3} alt="Icono Civil" /> Infraestructura de servicios, plazas, parques, equipamiento urbano, cordón cuneta, veredas y caminarías.</p>
            <p><img src={iconoCivil4} alt="Icono Civil" /> Construcción e instalación de plantas de tratamiento de efluentes cloacales.</p>
            <p><img src={iconoCivil5} alt="Icono Civil" /> Canalizaciones pluviales.</p>
          </div>
        </div>
        <div className='row itemServicio'>
          <div className='col-5'><CarouselServicio id="carruselElectromecanica" imagen1={electromecanica1} imagen2={electromecanica2} imagen3={electromecanica3}/></div>
          <div className='col-7 infoItemServicio'>
            <h2>ELECTROMECÁNICA</h2>
            <p><img src={iconoElectromecanica1} alt="Icono Electromecanica" /> Alumbrado público.</p>
            <p><img src={iconoElectromecanica2} alt="Icono Electromecanica" /> Tendido de líneas aéreas y subterráneas de media y baja tensión.</p>
            <p><img src={iconoElectromecanica3} alt="Icono Electromecanica" /> Estaciones transformadoras de hasta 132 KV.</p>
            <p><img src={iconoElectromecanica4} alt="Icono Electromecanica" /> Montaje de subestaciones transformadoras.</p>
            <p><img src={iconoElectromecanica5} alt="Icono Electromecanica" /> Centros de distribución de 13.2 y 33 KV.</p>
            <p><img src={iconoElectromecanica6} alt="Icono Electromecanica" /> Instalación eléctrica para luz y fuerza motriz de edificios.</p>
            <p><img src={iconoElectromecanica7} alt="Icono Electromecanica" /> Iluminación deportiva.</p>
            <p><img src={iconoElectromecanica8} alt="Icono Electromecanica" /> Electrificación rural.</p>
          </div>
        </div>
        <div className='row itemServicio'>
          <div className='col-5'><CarouselServicio id="carruselMetalurgica" imagen1={metalurgica1} imagen2={metalurgica2} imagen3={metalurgica3}/></div>
          <div className='col-7 infoItemServicio'>
            <h2>METALÚRGICA</h2>
            <p><img src={iconoMetalurgica1} alt="Icono Metalúrgica" /> Naves industriales de distintos tipos y luces</p>
            <p><img src={iconoMetalurgica2} alt="Icono Metalúrgica" /> Estructuras metálicas de cubierta.</p>
            <p><img src={iconoMetalurgica3} alt="Icono Metalúrgica" /> Talleres de carpintería de chapa y aluminio. Especiales y estándar.</p>
            <p><img src={iconoMetalurgica4} alt="Icono Metalúrgica" /> Accesorios para obras: andamios, moldes, rejas, escaleras, metálicas, barandas, tapas de cámara, etc.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiciosObras