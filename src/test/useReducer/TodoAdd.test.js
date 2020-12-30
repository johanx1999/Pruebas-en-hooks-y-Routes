import React from 'react';
import { shallow } from 'enzyme';
import { TodoAdd } from '../../components/08-useReducer/TodoAdd';
/* 
    Probamos que: 
    -No se llame handleAddTodo
    -Que se dispare el submit
    -Debe de llamar la funcion handleAddTodo    
 */
describe('pruebas en <TodoAdd />', () => {
    const handleAddTodo = jest.fn();
    
    const wrapper = shallow(
        <TodoAdd 
            handleAddTodo={handleAddTodo}
        />
    )


    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('NO debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit')
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0)
    })

    test('debe de llamar la funcion handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change',{
            target:{
                value:value,
                name:'description'
            }
        })
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}})
        expect(handleAddTodo).toHaveBeenCalledTimes(1)
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        })
        expect(wrapper.find('input').prop('value')).toBe('');
        /* 
            Cuando se haga el submit del formulario se debe de haber llamado una vez el handleAddTodo
            -Hacemos un analisis detallado de cuales son las propiedades que debe traer el handleAddTodo
            -Verificamos que el value del input sea un string vacio
        */
    })
    
    
})
