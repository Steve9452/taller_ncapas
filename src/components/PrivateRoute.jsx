import { Navigate } from "react-router-dom";
import authService from "../services/authService";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    return authService.getCurrentUser() ? children : <Navigate to="/signin" />;
  };

export default PrivateRoute;