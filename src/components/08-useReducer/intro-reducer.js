/* estado inicial del array de todos */

const initialState = [{
    id: 1,
    todo: 'compar pan',
    done: false
}];


/*Definimos nuestro reducer  */
const todosReducer = (state=initialState,action) =>{
    
    /* si existe la accion y el type es igual a 'agregar agregamos el todo' */
    if(action?.type === 'agregar' ){
        /* con  el spreed agregamos el nuevo todo */
        return [...state, action]
    }
    return state;
}


/* Inicializamos con variable */
let todos = todosReducer();


/* Cuando quiero agregar un todo */
const newTodo = {
    id: 2,
    todo: 'comprar leche',
    done: false
}


/* Accion para agregar un todo */
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}


/* Le enviamos la accion a el reducer */
todos = todosReducer(todos, agregarTodoAction)

console.log(todos);
