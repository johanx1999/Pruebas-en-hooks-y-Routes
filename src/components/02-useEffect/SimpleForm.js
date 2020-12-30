import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {
    const [formstate, setFormstate] = useState({
        name: '',
        email: ''
    })

    const  {name, email} = formstate;

    useEffect(()=>{
        console.log('Hola mundo');
        
    },[]);

    //CADA VEZ QUE CAMBIE EL FORM STATE SE EJECUTARA
    useEffect(()=>{
        console.log('Form State cambio');
    },[formstate]);
    
    
    
    useEffect(()=>{
        console.log('Email cambio');
    },[email]);

    const handleInputChange = ({target}) =>{
        setFormstate({
            ...formstate,
            [target.name]: target.value 
        });
    }


    return (
        <>
            <h1> UseEfect </h1>
            <hr /> 
                <div className='form-group'>
                    
                    <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={ name }
                    onChange={ handleInputChange }
                    />
                </div> 
                <div className='form-group'>
                    
                    <input
                    type='text'
                    name='email'
                    className='form-control'
                    placeholder='email@gmail.com'
                    autoComplete='off'
                    value={ email }
                    onChange={ handleInputChange }
                    />
                </div> 
                {/* si nombre existe mustra este mensaje */}
                {name === '123' && <Message />}
        </>
    )
}
