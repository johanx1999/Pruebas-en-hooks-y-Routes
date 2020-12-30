import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

/* 
    Para arrancar las pruebas 'npm run test'.
    TIPOS DE PRUEBAS
    -expect(wrapper).toMatchSnapshot()= Nos sirve para tomarle una foto a mi componente y 
    verificar que coincida con lo que espero.


*/

describe('Pruebas en <HookApp />', () => {
    test('bebe de mostrarse correctamente', () => {
        const wrapper = shallow(<HookApp />)
        
        expect(wrapper).toMatchSnapshot();
    })
    
})
