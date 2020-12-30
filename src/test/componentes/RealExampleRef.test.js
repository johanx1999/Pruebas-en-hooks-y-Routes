import { shallow } from 'enzyme';
import React from 'react';
import { RealExampleRef } from '../../components/04-useRef/RealExampleRef';

describe('Pruebas en  <RealExampleRef />', () => {

/* 
    -VERIFICAR QUE UN COMPONENTE NO SE MUESTRE 
    -SIMULAR ACCION DE CLICK: wrapper.find('button').simulate('click'), verificamos que se muestre
    un componente condicionalmente = expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

    *Si vamos a enviar argumentos debe ser en el paso del shallow = <RealExampleRef argumentos={argumentos} />
*/

    const wrapper = shallow(<RealExampleRef />)

    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
        
        
    })
    
    test('No debe de mostrar el componente <MultipleCustomHooks />', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false)

        
    })
    
    test('Debe mostrar el componente <MultipleCustomHooks />', () => {
        wrapper.find('button').simulate('click')
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true)

        
    })
    


})
