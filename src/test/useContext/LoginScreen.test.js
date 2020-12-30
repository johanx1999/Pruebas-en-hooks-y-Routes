import React from 'react';
import { mount } from 'enzyme';
import { LoginScreen } from '../../components/useContext/LoginScreen';
import { UserContext } from '../../components/useContext/UserContext';

/* 
    -Verificamos que el setUser se llame con los valores deseados
    -Debemos enviarle el setValue con doble llave en el value
    -Le ponemos los parentecis a el boton para ejecutar la accion de click 
    
*/


describe('Pruebas en <LoginScreen />', () => {
    const setUser = jest.fn();
    
    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>

            <LoginScreen />

        </UserContext.Provider>
    )

    test('debe ejecutarse el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 1234,
            name:'johan'
        })
    })
    
})
