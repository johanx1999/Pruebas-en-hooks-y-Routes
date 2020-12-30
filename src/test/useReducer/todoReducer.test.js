import React from 'react';
import { todoReducer } from '../../components/08-useReducer/todoReducer';

/* 
    PRUEBAS EN TODOREDUCER:
    -Que retorne el estado por defecto
    -Que agrege un nuevo TODO
    -Que complete una TODO
    -Que borre un TODO
*/

describe('Pruebas en todoReducer', () => {
    
    const demoTodos = [{
        id:1,
        desc: 'Aprender React',
        done: false
    },{
        id:2,
        desc: 'Aprender Mongo',
        done: false
    }]
    
    
    test('debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos,{});
        expect(state).toEqual(demoTodos)

    })
    
    
    test('debe de agregar un TODO', () => {
    /* 
        IMPORTANTE: para evaluar con el toEqual un state de un reducer debemos extraerlo con
        el operador spread y dentro de llaves []
    */
      
      
      
        const newTodo={
            id: 3,
            desc: 'Aprender Express',
            done: false
        };
        
        const action = {
            type: 'add',
            payload: newTodo
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3)
        // console.log(state);
        expect(state).toEqual([...demoTodos, newTodo])
        
    })
    
    test('debe de borrar un TODO', () => {
        const id = demoTodos[1].id;
        
        const action = {
            type: 'delete',
            payload: id
        }

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]])
    })
    
    
    test('debe de hacer el TOGGLE del TODO', () => {
        
        /* 
            -se le aplica a el TODO de id: 1 (payload:1)
            -hacemos el llamado a el todoReduder pasandole el array con los TODOS y la accion
            -1 esperamos que el elemento del state en pocicion 0 tenga el valor de true en el done
            -2 esperamos que el elemento de mi array de TODOS en pocicion[1] siga siendo igual a 
            el de mi arreglo ariginal

        */


        const action = {
            type: 'toggle',
            payload: 1
        }

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true); //(1)
        expect(state[1]).toEqual(demoTodos[1]) //(2)
    })


    



})
