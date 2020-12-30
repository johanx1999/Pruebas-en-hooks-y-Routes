// (2)



import React from 'react'
//import Proptypes from 'prop-types'
import { TodoListItem } from './TodoListItem'
export const TodoList = ({handleDelete, todos, handleToggle}) => {
    return (


        /*
          NOTA: Utilizamos los componentes para no escribir el codigo dentro del mismo componente y tener el 
          codigo mas limpio y facil de mantener
        */        
            
        <ul>
            {
                // Recorremos el array de todos que lo teniamos en el localStorage y viene del reducer
                todos.map((todo,i) => (

                  /*

                      ***{handleDelete, todos, handleToggle} los recibimos desde TodoApp***
  


                  Aca utilizamos el componente que hemos creado anteriormente 
                  le enviamos las devidas propiedades requeridas
                  por cada iteracion va a asignarle un valor a la I

                  id, desc, done vienen de la accion new todo que esta en TodoAdd


                  */ 
                  /*
                    Llamamos el componente TodoListItem y le enviamos la propiedad respectiva con el
                    todos.map(()=>{})
                  */
                   <TodoListItem 
                   key={ todo.id }   
                   todo = { todo }
                   index = { i }
                   handleDelete = { handleDelete }
                   handleToggle = { handleToggle }/>
                ))
            }
        </ul>
    )
}
/* 
TodoList.protoTypes={
    todos: Proptypes.array.isRequired,
    handleDelete: Proptypes.func.isRequired,
    handleToggle: Proptypes.func.isRequired
} */

