import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../components/useContext/HomeScreen';
import { UserContext } from '../../components/useContext/UserContext';

/* 
    Pruebas en el useContext
    -Debemos proveer lo que el componente HomeScreen necesita que es un user con doble llave porque 
    estamos regresando un objeto
    -Utilizamos mount porque shallow solo nos muestra en en el snapshot la informacion que esperamos
    que tenga una etiqueta pre que tenga HomeScreen en h1 (NOS RENDERIZA TODO EL COMPONENTE HIJO)

*/

describe('pruebas en el <HomeScreen />', () => {
    const user = {
        name: 'johan',
        email: 'johan@gmail.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>

            <HomeScreen/>

        </UserContext.Provider>
    )

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    
    
})



