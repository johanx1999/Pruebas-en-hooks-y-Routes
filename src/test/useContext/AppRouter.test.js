import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../components/useContext/AppRouter';
import { UserContext } from '../../components/useContext/UserContext';

/* 
    En todas las pruebas debemos de importar el UserContext para poder hacer nuestras pruebas

*/


describe('Pruebas en <AppRouter />', () => {
    const user = {
        id: 1,
        name: 'johan'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            
            <AppRouter />

        </UserContext.Provider>
    )
    test('debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })
    
})
