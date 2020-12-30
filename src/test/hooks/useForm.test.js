import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

/* 
    Debemos importar el renderHook para poder hacerle las pruebas en los hooks
    initialForm: es lo que le vamos a enviar como atributo a nuestro useForm 
    -extraemos el result del useForm que es lo que retorna nuestro formulario
    IMPORTANTE: Debemos de extraer lo que retorna dependiendo si es un array o un objeto
    se extrae por pocicion o por referencia.
    ***Si tenemos que extraer el segundo elemento de un array le ponemos un espacio en blanco
    y luego lo separamos con una coma(,).

    
*/

describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name: 'johan',
        email: 'nexus1999@gmail.com'
    }
    
    test('debe regresar un formulario por defecto', () => {
        const {result} = renderHook(()=>useForm(initialForm));
        const [values, handleInputChange, reset] = result.current
        // console.log(values, handleInputChange, reset);

        expect(values).toEqual(initialForm)
        expect(typeof handleInputChange).toEqual('function')
        expect(typeof reset).toEqual('function')

    })
    
    test('Debe de cambiar el valor del formulario (cambiar nombre)', () => {
        const {result} = renderHook(()=>useForm(initialForm));        
        const [ , handleInputChange] =  result.current;

        act(()=>{
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'juan'
                }
            })
        })

        const [formValues] = result.current;

        expect(formValues).toEqual({...initialForm, name: 'juan'})
    })
    



})
