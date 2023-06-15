import React from 'react'
import './laEmpresa.css'

function LaEmpresa() {

    return (
        <>
            <div className='contenedorLaEmpresa' id="LaEmpresa">
                <div className='tituloCategoriaEmpresa'>LA EMPRESA</div>
                <div className='introduccionHistoria'>
                    <p>Constituida en el año 2000 por profesionales de vasta trayectoria en ingeniería electromecánica, ALPRE S.A. nace como una empresa dedicada al rubro construcción.</p>
                    <p>Durante más de 20 años, hemos desarrollado un gran equipo de profesionales quienes, con maquinaria y equipamiento específico propio, estamos capacitados para proyectar y ejecutar grandes obras públicas y privadas de arquitectura, ingeniería civil, electromecánica y metalúrgica.</p>
                </div>
                <div className='filaMisionVision'>
                    <div className='cardPropiedad'>
                        <h3>Misión</h3>
                        <p>Proyectamos y ejecutamos obras de construcción tanto para clientes del sector público como privados. Basados en la honestidad y sostenidos por el compromiso de nuestro equipo de trabajo, buscamos la satisfacción del cliente / usuario y un desarrollo eficaz de proyectos de construcción dentro de Argentina.</p>
                    </div>
                    <div className='cardPropiedad'>
                        <h3>Visión</h3>
                        <p>Ser una empresa moderna en cuanto a gestión de proyectos y personas, métodos constructivos, logística e ingeniería financiera de obras en el norte de la Argentina. Para ello, buscamos contar con tecnologpia de avanzada en managment y en cada una de nuestras áreas, maximizando las utilidades en un ambiente de trabajo en constante mejora y con una contribución positiva a nuestros clientes / usuarios, personal y sociedad en general.</p>
                    </div>
                </div>
                <div className='tituloValores'>
                    <h2>VALORES</h2>        
                </div>
                <div className='contenedorValores'>
                    <div className='cardValores'>
                        <h4>HONESTIDAD</h4>
                        <p>Actuar siempre con rectitud y veracidad; cumplir con la responsabilidad de manera ética y transparente.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>TRABAJO EN EQUIPO</h4>
                        <p>Compartir conocimientos, experiencias y esfuerzo, aportando lo mejor de cada uno y asumiendo responsabilidades para la consecución de un objetivo común.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>ADAPTABILIDAD</h4>
                        <p>Actuar de manera flexible en función a las circunstancias para lograr el mejor resultado de la tarea asignada.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>PROACTIVIDAD</h4>
                        <p>Estar dispuesto de forma activa a la realización de la tarea. Tomar la iniciativa, anticiparse a los hechos y responsabilizarse de manera positiva por lo que suceda.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>CLARIDAD</h4>
                        <p>Comunicarse y resolver cuestiones de manera precisa. Implica la ausencia de confusión en la comunicación del mensaje y en el entendimiento que el receptor tiene por parte de éste.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>PROFESIONALISMO</h4>
                        <p>Desempeñarse en el trabajo con conocimientos técnicos suficientes para solucionar problemas y brindar soluciones.</p>
                    </div>
                    <div className='cardValores'>
                        <h4>RESPONSABILIDAD SOCIAL</h4>
                        <p>Compromiso activo como organización y equipo de trabajo en beneficio de la sociedad en general.</p>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default LaEmpresa