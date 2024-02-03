import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carouselPortada.css'

function CarouselPortada() {

    return (
        <>
            <div className='contenedorCarouselPortada' id="Inicio">            
                <Carousel autoPlay={true} dynamicHeight={false} infiniteLoop={true} emulateTouch={false} showArrows={false} showStatus={false} showThumbs={false}>
                    <div className='itemCarouselPortada itemCarouselPortada1'>
                        <span></span>
                    </div>
                    <div className='itemCarouselPortada itemCarouselPortada2'>
                        <span></span>
                    </div>
                    <div className='itemCarouselPortada itemCarouselPortada3'>
                        <span></span>
                    </div>
                </Carousel>
                <div className='textoCarouselPortada'>CONSTRUCCIONES Y SERVICIOS</div>
            </div>
        </>
    )
}

export default CarouselPortada