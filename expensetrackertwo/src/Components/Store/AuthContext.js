import React, { useState,useEffect } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  profiles:[]
});

export const AuthContextProvider = (props) => {
    const initialToken=localStorage.getItem('token');
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {

    setToken(token);
    localStorage.setItem('token',token);
   
    
  };



  const logoutHandler = () => {
    localStorage.removeItem('token')
    setToken(null);
  };
  

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    profiles:[]
  };
 

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
    