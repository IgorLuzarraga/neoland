import { useEffect, useReducer, useState } from "react";
import { reducerTodoList, todoList } from "../states/todoList";
import "./UseReducer.css";

// NOTE: Prpject to learn how to use useReducer, we made a 
// todo list. It's functional, but the remove buttom 
// removes the last todo item. 
// Fix it to remove the item selected by the user

const UseReducer = () => {
  // recibe en el array dos cosas: estado actual ( todo) y el dispatch que se encarga de despachar los diferentes tipos de las acciones

  // en el parentesis del useReducer recibimos el:
  // -------------> 1) La funcion reductora con los diferentes tipos de las acciones
  // -------------> 2) El estado inicial de nuestro reducer

  // const [todos, dispatch] = useReducer(
  //   reducerTodoList,
  //   local ? JSON.parse(local) : todoList
  // );

  const [todos, dispatch] = useReducer(
    reducerTodoList, todoList);

  /// vamos a hacer una funcion que se encargue de utilizar el dispatch
  const handleComplete = (todo) => {
    // el dispatch lo que hace es dar el tipo de la accion y el id del todo para poder gestionar la accion
    dispatch({ type: "COMPLETE", payload: { id: todo.id } });
  };

  const handleNewTodo = (newToDo, dispatch) => {
    dispatch({
      type: "NEW_TODO",
      payload: newToDo
    });
  };

  const handleRemoveTodo = (todo) => {
    dispatch({
      type: "REMOVE_TODO",
      payload: {
        id: todo.id,
      },
    });
  };

  const handleRequest = (todo, e) => {
    dispatch({
      type: "NEWREQUEST",
      payload: {
        id: todo.id,
        request: e.target.value,
      },
    });
  };

  const handleRemove = (todo) => {
    dispatch({
      type: "REMOVEREQUEST",
      payload: {
        id: todo.id,
      },
    });
  };

  useEffect(() => {
    console.log("todos", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h2>USEREDUCER TODOLIST</h2>
      <hr></hr>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label key={todo.id}>
            <h2>{todo.title}</h2>
            <div className="containerCheck">

              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => handleComplete(todo)}
              />

              <p>{JSON.stringify(todo.complete)}</p>

              {/* {todo.newRequest && (
                <>
                  <p>{todo.newRequest}</p>
                  <button onClick={() => handleRemove(todo)}>
                    Borrar request
                  </button>
                </>
              )} */}
              {
                <>
                  <p>{todo.newRequest}</p>
                  <button onClick={() => handleRemove(todo)}>
                    Borrar request
                  </button>
                </>
              }
            </div>

            {/* <input
              type="text"
              id="newRequest"
              onChange={(e) => handleRequest(todo, e)}
            /> */}
            <hr></hr>
          </label>
        </div>
      ))}

      {newTodo(dispatch)}

    </>
  );
};

const showNewTodo = () =>
  <input
    type="text"
    id="newRequest"
    onChange={(e) => handleRequest(todo, e)}
  />

const newTodo = (dispatch) => {
  const [inputValue, setInputValue] = useState('');

  const handleNewTodo = (newToDo) => {
    console.log('handleNewTodo -> newToDo: ', newToDo)
    dispatch({
      type: "NEW_TODO",
      payload: newToDo
    });
  };

  return (
    <div className="containerMain">
      <div className="containerInput">
        <input
          type="text"
          name="inputNewTodo"
          id="inputNewTodo"
          onChange={event => setInputValue(event.target.value)}
        />

        <button
          // Method 1
          //onClick={(e) => login(inputValue)}

          // Method 2
          onClick={(e) => handleNewTodo(inputValue)}
          className="btnNewToDo"
        >
          New ToDo
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
