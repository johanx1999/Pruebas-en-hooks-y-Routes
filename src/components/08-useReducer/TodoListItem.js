// (3)

 

import React from 'react'
//import { TodoList } from './TodoList'

export const TodoListItem = ({ todo, index, handleDelete, handleToggle}) => {
   // const [handleToggle,handleDelete] = TodoList();
    return (
            /*

                ***{ todo, index, handleDelete, handleToggle} = Son las propiedades recibidas desde TodoList y 
                las asignamos en los respectivos campos 
                -key en el <li> 
                -todo.done en la clase de CSS la concatenamos y ponemos la condicion 
                -cuando le demos click a el parrafo lo completara 
                Es el componente encargado de imprimir el Todo con la descripcion 
                Le enviamos las propiedades desde Todo List 
            */
            <li

                key={todo.id}
                className='list-group-item'
                >
                <p className= {`${todo.done && 'complete'}`} 
                    onClick={ () => handleToggle(todo.id)} > { index + 1 }. { todo.desc } </p>
                <button className='btn btn-danger'
                        onClick={ ()=>handleDelete(todo.id) } >
                    Borrar
                </button>
             </li>
        
    )
}
