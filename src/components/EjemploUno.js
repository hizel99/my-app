import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form'

const EjemploUno = () => {
    const {register, formState:{errors}, handleSubmit}= useForm();
    const onSubmit=(data,e)=>{
        
    }
    return ( 
        <Fragment>
            <h1>Ejemplo 1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                className='form-control my-2'
                placeholder='Ingrese Titulo'
                {...register('titulo', {required:true})}
                />
                <input type="text"
                className='form-control my-2'
                placeholder='Ingrese Descripcion'
                {...register('descripcion', {required:true})}
                />
                <button className='btn btn-primary'></button>
            </form>
        </Fragment>
     );
}
 
export default EjemploUno;