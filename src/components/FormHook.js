import React,   {Fragment} from 'react'
import {useForm} from 'react-hook-form'
const FormHook = () => {
    const {register, formState: { errors }, handleSubmit}= useForm();
    const onSubmit= (data,e)=> {
        console.log(data)
        e.target.reset()
    }
    return (
        <Fragment>
            <h1>Formulario</h1> 
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                type="text"
                {...register('titulo', { 
                    required: true                
                }
                )}
                className="form-control my-2"      
                placeholder='llllll'    
                />
                
                {errors?.titulo?.type === 'required' && 
                <span className='text-danger text-small d-block mb-2'>Titulo es requerido</span>}
               
                <button className='btn btn-primary '>Enviar</button>
            </form>
        </Fragment>
      );
}
 
export default FormHook;