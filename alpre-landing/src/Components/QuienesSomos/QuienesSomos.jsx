import React from 'react'
import './quienesSomos.css'
import foto from '../../assets/FotoPrueba.png'

function QuienesSomos() {
  return (
    <>
        <div className='contenedorQuienesSomos' id="QuienesSomos">
            <div className='tituloCategoria'>QUIENES SOMOS</div>
            <h2 className='tituloDirectorio'>DIRECTORIO</h2>
            <div className='contenedorPresiVice'>
                <div className='cardPresiVice'>
                    <img src={foto} alt="" />
                    <h3>Manuel Alberto Alvarez</h3>
                    <h4>Presidente</h4>
                    <p>
                        <span>Ingeniero electricista - Universidad Nacional de Tucumán.</span>
                        <span>Ex Presidente de la Asociación Argentina de Luminotecnia.</span>
                        <span>Ex Presidente de la Cámara Tucumana de la Construcción.</span>
                    </p>
                </div>
                <div className='cardPresiVice'>
                    <img src={foto} alt="" />
                    <h3>Santiago Alvarez Gonzalez</h3>
                    <h4>Vicepresidente</h4>
                    <p>
                        <span>Contador Público Nacional - Universidad Nacional de Tucumán.</span>
                        <span>Master Universitario en Dirección de Proyectos - Universidad Ramon Llull (Barcelona, España).</span>
                        <span>Miembro de la Comisión Directiva de la Cámara Tucumana de la Construcción.</span>
                    </p>
                </div>
            </div>
            <div className='contenedorEmpleados'>                
                <div className='cardEmpleado'>
                    <img src={foto} alt="" />
                    <h3>Arq. Miguel Angel Lindon</h3>
                    <h4>Gerente de producción</h4>
                </div>
                <div className='cardEmpleado'>
                    <img src={foto} alt="" />
                    <h3>Maximiliano Perez Zitzke</h3>
                    <h4>Responsable de administración</h4>
                </div>
                <div className='cardEmpleado'>
                    <img src={foto} alt="" />
                    <h3>Lucas Herrera</h3>
                    <h4>Responsable de compras y logística</h4>
                </div>
                <div className='cardEmpleado'>
                    <img src={foto} alt="" />
                    <h3>Claudio Medina</h3>
                    <h4>Responsable de RR.HH.</h4>
                </div>
            </div>
        </div>
    </>
  )
}

export default QuienesSomos