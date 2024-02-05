import React from 'react'
import './carouselServicio.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

function CarouselServicio(props) {

    return (
        <>
            <div id={props.id} className="carousel slide carouselServicio">
                <div className="carousel-inner">
                    {
                        props.imagenes.map((imagen, index) => {
                            return(
                            <div className={`carousel-item ${ index === 0 && 'active'}`} key={index}>
                                <LazyLoadImage
                                    alt='Carrusel Fotografías'
                                    src={imagen}
                                    className='d-block w-100'
                                />
                            </div>
                            )
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Anterior</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Siguiente</span>
                </button>
            </div>
        </>
    )
}

export default CarouselServicio