import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './contacto.css'
import emailjs from 'emailjs-com';
import contacto from '../../assets/contact.png'

function Contacto() {

  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    setLoading(true);
    const templateParams = {
      name: data.name,
      venture: data.venture,
      email: data.email,
      message: data.info
    };
    try {
      const response = await emailjs.send(
        'service_n5jk22f',
        'template_02vxhw6',
        templateParams,
        'JPoXxQWc3zNi10GK9'
      );
      if (response.status === 200){
        setEnviado(true)
      } else{
        window.location.reload(true)
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false)
  };
  return (
    <>
    {
      !enviado ?
      <>
        <div className='separacionTituloCategoria'></div>
        <div className='contenedorContacto' id="Contacto">
          <div className='tituloCategoriaContacto'>CONTACTO</div>
          <h2 className='tituloComunicate'>COMUNÍCATE CON NOSOTROS</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='FormularioContactoForm'>
            <div className="row w-100">
              <div className="form-group col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <input
                  autoComplete='false'
                  id='name'
                  type="text"
                  placeholder="Nombre"
                  className="inputContacto form-control"
                  {...register("name", {
                      required: true,
                      maxLength: 60
                  })}
                />
                {errors.name && errors.name.type === "required" && (
                  <p className="errorForm">Campo requerido</p>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                  <p className="errorForm">
                    No puede contener más de 60 caracteres
                  </p>
                )}
              </div>
              <div className="form-group col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <input
                  autoComplete='true'
                  id='venture'
                  type="text"
                  placeholder="Empresa"
                  className="inputContacto form-control"
                  {...register("venture", {
                      required: true,
                      maxLength: 100
                  })}
                />
                {errors.venture && errors.venture.type === "required" && (
                  <p className="errorForm">Campo requerido</p>
                )}
                {errors.venture && errors.venture.type === "maxLength" && (
                  <p className="errorForm">
                    No puede contener más de 100 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="row w-100 mt-3">
              <div className="form-group col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                <input
                  id='email'
                  type="email"
                  placeholder="Correo electrónico"
                  className="inputContacto form-control"
                  {...register("email", { required: true, maxLength: 100 })}
                />
                {errors.email && errors.email.type === "required" && (
                  <p className="errorForm">Campo requerido</p>
                )}
                {errors.email && errors.email.type === "maxLength" && (
                  <p className="errorForm">
                    No puede contener más de 100 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className="row w-100 contenedorTextarea">
              <div className="form-group col-12">
                <textarea
                  autoComplete='false'
                  id='info'
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  className="textareaContacto form-control"
                  {...register("info", {
                      required: true,
                      maxLength: 350,
                  })}
                />
                {errors.info && errors.info.type === "required" && (
                  <p className="errorFormTextarea">Campo requerido</p>
                )}
                {errors.info && errors.info.type === "maxLength" && (
                  <p className="errorFormTextarea">
                    No puede contener más de 100 caracteres
                  </p>
                )}
              </div>
            </div>
            <div className='d-flex divBotonContacto'>
              <button type="submit" className="botonSubmitContacto">
                {loading ? (
                  <span
                    className="spinner-border spinner-border-sm mr-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Enviar"
                )}
              </button>
            </div>
          </form>        
        </div>
      </> 
    : 
      <>
        <div className='contenedorContacto' id="seccionContacto">
          <div className='tituloCategoria separacionTituloCategoria'>CONTACTO</div>
          <h2 className='tituloDirectorio'>COMUNÍCATE CON NOSOTROS</h2>
          <div className='contactoExitoso'>
            <img src={contacto} alt="Contacto exitoso" />
            <h3>¡Gracias por contactarnos!</h3>
            <h4>Te responderemos muy pronto</h4>
          </div>
        </div>
      </>
    }
    </>
  )
}

export default Contacto