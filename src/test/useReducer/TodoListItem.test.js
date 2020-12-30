import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../components/08-useReducer/TodoListItem';
/* 
    Para crear una simulacion de una funcion = const handleDelete = jest.fn(): No me interesa
    que hagan lo que tienen que hacer sino que mi componente tenga todos los argumentos requeridos.

    ***.toHaveBeenCalledWith = para asegurarse de que se haya llamado a una función
    simulada con argumentos específicos

    -Pruebas en clases CSS
    -Pruebas en funciones handleDelete, handleToggle
    -Pruebas en que al hacer click en un boton se llamen las funciones con los textos esperados
    -<TodoListItem /> le enviamos los argumentos requeridos y simulamos las funciones con jest.fn() 

*/
describe('Pruebas en <TodoListItem />', () => {
    
    const demoTodos = [{
        id:1,
        desc: 'Aprender React',
        done: false
    },{
        id:2,
        desc: 'Aprender Mongo',
        done: false
    }]


    const handleDelete = jest.fn()
    const handleToggle = jest.fn()
    
    const wrapper = shallow(
        <TodoListItem 
            todo={demoTodos[0]}
            index={0}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />
    )


    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()    
    })
    

    test('debe de llamar la funcion handleDelete', () => {

        /* 
            Verificamos que la funcion se llame con los argumentos del todo de indice[0]
            -Nos aseguramos de que se llame una funcion con argumentos especificos, al tocar
            el boton se debe de seleccionar el todo de la pocicion [0]            
        */

        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id)   
    })
    

    test('debe llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id)
    })
    

    test('debe de mostrar el texto correctamente', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`)
    })
    

    // Prueba en clases CSS
    test('debe de tener la clase complete si TODO.done=true', () => {
        const todo = demoTodos[0];
        todo.done = true;
        
        const wrapper = shallow(
            <TodoListItem 
                todo={todo}
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true)
    })
    
})
