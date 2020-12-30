// (0) 



export const todoReducer = (state= [], action) => {
    switch (action.type) {
        case 'add':
        // En caso de que sea de tipo 'add' devuelve el estado anterior y añadele action.payload
        // que es enviado desde TodoAdd que es el (newTodo)  
            return [...state, action.payload];


        // En caso de que sea tipo 'delete' devuelve un array con todos los (todos) que sean diferentes a el id seleccionado
        case 'delete':
            return state.filter( todo => todo.id !== action.payload);


        // En caso de que sea de tipo 'toggle' recorre todos los (todos) y el todo que tenga el id igual a la 
        // accion.payload; devolvemos todo el (todo) y le cambiamos el (!todo.done) hacemos la negacion del estado anterior 
        case 'toggle':
            return state.map( todo =>
                (todo.id === action.payload)
                  ? {...todo, done: !todo.done}
                  : todo

            )

        // Otra forma de hacer el cambio de (!todo.done)
        case 'toggle-old':
            return state.map(todo=>{
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            });

        // por default va a devolver el state
        default:
            return state;
    }
}
