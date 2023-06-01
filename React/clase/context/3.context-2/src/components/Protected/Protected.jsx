import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const Protected = ({ children }) => {
  const { user } = useContext(UserContext);

  if (user == null) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;
