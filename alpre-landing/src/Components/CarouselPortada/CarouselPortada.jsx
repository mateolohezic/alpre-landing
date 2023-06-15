import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carouselPortada.css'
import imagen1 from '../../assets/CarrouselPortada/carousel1.jpg'
import imagen2 from '../../assets/CarrouselPortada/carousel2.jpg'

function CarouselPortada() {

    return (
        <>
            <div className='contenedorCarouselPortada' id="Inicio">            
                <Carousel autoPlay={true} dynamicHeight={false} infiniteLoop={true} emulateTouch={false} showArrows={false} showStatus={false} showThumbs={false}>
                    <div className='itemCarouselPortada itemCarouselPortada1'>
                        <img src={imagen1} />
                    </div>
                    <div className='itemCarouselPortada itemCarouselPortada2'>
                        <img src={imagen2} />
                    </div>
                </Carousel>
                <div className='textoCarouselPortada'>OBRAS DE ARQUITECTURA E INGENIERÍA</div>
            </div>
        </>
    )
}

export default CarouselPortada