import React from 'react'
import './carouselServicio.css'

function CarouselServicio(props) {

    return (
        <>
            <div id={props.id} className="carousel slide carouselServicio">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={props.imagen1} className="d-block w-100" alt="Carrusel Fotografías" />
                    </div>
                    <div className="carousel-item">
                        <img src={props.imagen2} className="d-block w-100" alt="Carrusel Fotografías" />
                    </div>
                    <div className="carousel-item">
                        <img src={props.imagen3} className="d-block w-100" alt="Carrusel Fotografías" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target={`#${props.id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target={`#${props.id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default CarouselServicio