import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../components/08-useReducer/TodoApp';
/* 
    ¿Cuando utilizamos el mount? R/: Cuando necesito probar toda la aplicacion en contexto general
    y recibiremos los mismos argumentos que con el shallow.

    Con act simulamos una accion en las pruebas llamando la funcion handleAddTodo y 
    enviandole los todo en la pocicion 0 y 1
    -En el h1 se debe de haber modificado el texto por (2)
    -El localStorage se debe de haber llamado 2 veces

    -Eperamos que agregue un todo y tambien lo elimine
    -Espero que en mi h1 tenga el texto deseado
    
*/
describe('Pruebas en <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);
    const demoTodos = [{
        id:1,
        desc: 'Aprender React',
        done: false
    },{
        id:2,
        desc: 'Aprender Mongo',
        done: false
    }]
    

    Storage.prototype.setItem = jest.fn(()=>{});

    
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })


    test('debe de agregar un TODO', () => {
        const wrapper = mount(<TodoApp />)
        act(()=>{
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        })

        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 2')
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)
    })

    test('debe eliminar un TODO', () => {
        // Agregamos un todo para luego eliminarlo con indice[0]
        // Llamamos el componente TodoList y la propiedad handleDeletepara borrar el elemento con el id
        // Esperaria que en el h1 tenga TodoApp 0

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        
        expect(wrapper.find('h1').text().trim()).toBe('TodoApp 0')

    })
    
    
})
