import { createContext, useContext, useMemo, useEffect, useState } from "react";
import PropTypes from "prop-types";
const AuthContext = createContext();

// TODO: Implement the real AuthProvider component

const AuthProvider = ({ children }) => {
  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [token, setToken_] = useState(localStorage.getItem("role") || null);
  const [role, setRole_] = useState(localStorage.getItem("role") || null);
  const setToken = (token) => {
    setToken_(token);
    localStorage.setItem("token", token);
  };

  const setRole = (role) => {
    setRole_(role);
    localStorage.setItem("role", role);
  };

  // useEffect(() => {
  //   setRole(localStorage.getItem("role"));
  //   setToken(localStorage.getItem("token"));
  // }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      // localStorage.removeItem("token");
    }

    if (role) {
      localStorage.setItem("role", role);
    } else {
      // localStorage.removeItem("role");
    }
  }, [token, role]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      role,
      setRole,
    }),
    [token, role]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
