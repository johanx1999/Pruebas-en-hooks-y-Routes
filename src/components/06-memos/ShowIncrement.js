import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volvi agenerar :(');
    
    return (
    <button
        className='btn btn-primary'
        onClick={()=>{
            increment(10)
        }}>
            +1
    </button>    )
})
