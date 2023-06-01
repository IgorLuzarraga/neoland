import { createContext, useState } from "react";

// Creamos el contexto y lo exportamos, se crea gracias al metodo de createContext
export const UserContext = createContext();

// vamos a hacer un providerr que nos a va proveeder de toda la info de este contexto
export const UserContextProvider = ({ children }) => {
  // creo el estodo que quiero que sea general a todos los elementos que grapea el contexto
  const [user, setUser] = useState("Peter Pan");

  // devuelvo un Provider, que en este provider lo que vamos a hacer el compartir los elementos que
  // ... quiero que sean generales en los elementos que grapea el contexto
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
