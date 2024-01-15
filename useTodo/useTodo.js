import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [ 
  // {
  //   id: new Date().getTime(),
  //   description: 'Recolectar la piedra del alma',
  //   done: false
  // }, 
];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {


  const [todos, dispatch] = useReducer( todoReducer, initialState, init );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ));
  }, [todos])

  const handleNewTodo = ( todo ) => {
    console.log({ todo });

    //Creo la acción que va a tener un tipo y un payload.
    const action = {
      type: 'Add To Do',
      payload: todo
    }

    //Despacho la acción que he creado en el paso anterior
    dispatch( action );
  };


  const handleDeleteTodo = ( id ) => {
    dispatch({
      type: 'Remove To Do',
      payload: id
    });
  }

  const handleToggleTodo = ( id ) => {
    console.log({ id });
    dispatch({
      type: 'Toggle To Do',
      payload: id
    });
  }

  const todosCount = todos.length;
  const pendingTodosCount = todos.filter(todo => !todo.done).length;

  return {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    handleToggleTodo,
    handleDeleteTodo
  }
}