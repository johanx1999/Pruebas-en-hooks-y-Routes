// (1)

import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'

import './styles.css'


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [] ;
    
    
    
    
    
    /* [{
        id: new Date().getTime(),
        desc: 'Aprender react',
        done: false
    }] */
}

export const TodoApp = () => {



    // todos son extraidos desde todoReducer  
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    //INICIO DE FORMULARIO
    
    //FIN DE FORMULARIO
    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    },[todos]);

    /*
        Funciones encargadas de disparar acciones a mi reducer 
    */

    const handleDelete = (todoId) =>{

        const action = {
            type: 'delete',
            payload: todoId,
        }
        dispatch(action);
        
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        })
        
    } 

    const handleAddTodo = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo,
        })
    }



    return (
            /*
                Componente encargado de llamar los demas componentes 
            */   
            <div>
                    <h1>TodoApp {todos.length} </h1>
                    <hr />
                <div className='row'>
                    
                    <div className='col-7'>
                            
                        <TodoList todos={todos}
                                  handleDelete={handleDelete}
                                  handleToggle={handleToggle} 
                        />
                        
                    </div>

                                <div className='col-5'>

                                    <TodoAdd 
                                       handleAddTodo = {handleAddTodo}
                                    />
                                </div>
                </div>
            </div>
    )
}