import { Navigate } from "react-router-dom";

export const Protected = ({ children }) => {
  // tendremos que traernos el user del contexto

  // if(user == null){
  //     return <Navigate to="/login"/>
  // }

  return children;
};
