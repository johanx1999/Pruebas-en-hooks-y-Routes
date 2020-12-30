import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');
/* 
- PRUEBAS EN HOOKS: Simulacion del retorno del hook
- BUSCAR EN ETIQUETAS DEL HTML QUE TENGAN EL TEXTO DESEADO


¿Como simulamos informacion falsa para los hooks, informacion de pruebas?
-Le decimos a jest que no me interesa lo que suceda en el useFetch solo me interesa la
informacion que va a retornar, ya la probamos vamos a suponer que la informacion viene 
con error o con informacion que yo espero
***Pasamos por un mock() no me importa la implementacion me importan los resultados
*** jest.mock('../../hooks/useFetch')= Le ponemos la misma direccion del useFetch
-mockReturnValue= es la informacion que quiero retornar de mi hook

-Para buscar si existe una clase CSS en mi componente con un mensaje condicional


*/

describe('Pruebas en <MultipleCustomHooks />', () => {
    
    /* 
    Pruebas y simulacion de hook, primero copiamos la ruta y luego simulamos lo que queremos
    retornar en el hook.
    1-  jest.mock('../../hooks/useCounter');

    2-  useCounter.mockReturnValue({
            counter: 10, increment: ()=>{}
        })
*/

    useCounter.mockReturnValue({
        counter: 10, increment: ()=>{}
    })

    test('debe de mostrarse correctamente', () => {
        
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })

    
    test('should debe mostrar la informacion', () => {
        
        useFetch.mockReturnValue({
            data: [{
                author: 'Johan',
                quote: 'Hola mundo'
            }],
            loading: false,
            error: null
        })
        
        const wrapper = shallow(<MultipleCustomHooks />)
        // console.log(wrapper.html());
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola mundo')
        expect(wrapper.find('footer').text().trim()).toBe('Johan')
        

    })

})
