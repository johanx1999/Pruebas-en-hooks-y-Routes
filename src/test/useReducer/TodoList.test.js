import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../components/08-useReducer/TodoList';


/* 
    Probamos que: 
    -Se muestre correctamente
    -Que tenga dos elementos del TodoListItem
    -Esperamos que tenga las (props) deseadas

*/
const demoTodos = [{
    id:1,
    desc: 'Aprender React',
    done: false
},{
    id:2,
    desc: 'Aprender Mongo',
    done: false
}]




describe('pruebas en <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />

    )
    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe tener 2 <TodoListItem />', () => {
        // console.log(wrapper.find('TodoListItem').length);
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
        // para ver las propiedades que trae (at)
        // console.log(wrapper.find('TodoListItem').at(0).props);
        expect(wrapper.find('TodoListItem').at(0).props).toEqual(expect.any(Function))

    })


    

})
