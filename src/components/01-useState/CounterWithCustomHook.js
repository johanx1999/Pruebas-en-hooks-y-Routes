import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'
export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(100)


    return (
        <>
            <h1>Counter With: {state} </h1>
            <hr />

            <button onClick={ () => increment(2) } className='btn btn-primary'> +2 </button>
            <button onClick={ reset} className='btn btn-primary'> Reset </button>
            <button onClick={ () => decrement(2) } className='btn btn-primary'> -2 </button>
        </>
    )
}
