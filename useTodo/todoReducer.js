export const todoReducer = ( initialState = [], action ) => {


  switch ( action.type ) {
    case 'Add To Do':
      //Siempre tengo que retornar un nuevo state (string, booleano, array, objeto...) En este caso, un nuevo objeto.
      return [ ...initialState, action.payload ]
  
    case 'Remove To Do':
      return initialState.filter( todo => todo.id !== action.payload );

    case 'Toggle To Do':
      return initialState.map( todo => {

        if( todo.id === action.payload ) {
          return {
            ...todo,
            done: !todo.done
          }
        }

        return todo;
      } );

    default:
      return initialState;
  }
}