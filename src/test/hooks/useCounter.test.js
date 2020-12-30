import { renderHook, act } from '@testing-library/react-hooks';
// import { act } from 'react-dom/test-utils';
import { useCounter } from '../../hooks/useCounter';

/* 
    Pruebas en useCounter
    *result = Es el resultado que desestructuramos
    *Renderizamos el hook con '@testing-library/react-hooks'
    *result.current.counter = esto nos muestra todo lo que contiene o retorna el hook useCounter
    *'.current' = Es lo que yo espero: Nos devuelve las funciones que retorna el hook

*/



describe('Pruebas en useCounter', () => {
    test('debe de retornar valores por defecto', () => {
        const {result} = renderHook(()=>useCounter());
        // console.log(result.current.counter);
        expect(result.current.counter).toBe(10)
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.decrement).toBe('function')
        expect(typeof result.current.reset).toBe('function')


    })
    
    // Ejecutar funciones del custom hook dentro de las pruebas
    /* 
        act(()=>{
            *Nos ayuda a ejecutar funciones dentro de los test 
        })
    */
    test('debe de tener el counter en 100', () => {
        const {result} = renderHook(()=>useCounter(100));
        expect(result.current.counter).toBe(100)


    })
    test('debe de incrementar en 1', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {increment} = result.current
        act(()=>{
            increment()
        })

        const {counter} = result.current;

        expect(counter).toBe(101)



    })
    
})
