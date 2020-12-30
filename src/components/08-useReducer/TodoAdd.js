// (1.1)

import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({handleAddTodo}) => {

    const [{description}, handleInputChange, reset] = useForm({
        description: ''
    });

    /*
        -NOTA = Este componente es el encargado de imprimir un input, va a ser llamado en  el componente TodoApp
        y desde alli le vamos a enviar la funcion handleAddTodo 


        Recibimos el handleaddTodo desde TodoApp que es el lugar en el cual se va a imprimir 
    */



    // Funcion encargada de enviar el formulario
    const handleSubmit = (e) => {
        e.preventDefault();

        if(description.trim().length <= 1){
            return ;
        }

 
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo(newTodo);
        reset();


    }


    return (
        <>

            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>

                 {/* El handleInputChange es la funcion extraida desde el useForm que es la encargada de enviar el formulario */}

                <input
                    type='text'
                    name='description'
                    className='form-control'
                    placeholder='Aprender...'
                    autoComplete='off'
                    value={description}
                    onChange={ handleInputChange}
                />
                 {/* Boton encargado de enviar el valor del formulario */}
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-1 btn-block'>
                        Agregar.
                </button>

            </form>

        </>
    )
}
