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
                <div className='textoCarouselPortada'>
                    <h2>
                        <span>MAS DE 20 AÑOS DEDICADOS A LA CONSTRUCCIÓN DE OBRAS DE</span>
                        <span>ARQUITECTURA E INGENIERÍA PARA EL SECTOR PÚBLICO E INDUSTRIAL</span>
                    </h2>
                    <h3>Rigurosidad técnica y cumplimiento de los más altos estándares de calidad</h3>
                </div>
            </div>
        </>
    )
}

export default CarouselPortada