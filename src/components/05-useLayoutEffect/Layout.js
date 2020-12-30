import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useCounter } from '../../hooks/useCounter'
import './layout.css'

export const Layout = () => {

    const {counter, increment}= useCounter(1)
    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { quote} = !!data && data[0]
    
    const parrafoRef = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(()=>{

        setBoxSize(parrafoRef.current.getBoundingClientRect());
        

    },[quote])

    return (
        <div>
            <h1> LayoutEffect</h1>
            <hr/>
           
            <blockquote className='blockquote text-right'>
                <p 
                    className='mb-0'
                    ref={parrafoRef}
                >{quote} </p>
            </blockquote>

    
                    <button className='btn btn-primary'
                            onClick={increment}>
                        Siguiente Quote.
                    </button>

                    <pre>
                        { JSON.stringify( boxSize, null, 3 ) }
                    </pre>
        </div>

    )
}
