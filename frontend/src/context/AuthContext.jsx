import React, { createContext, useEffect, useState } from 'react';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const initialLoggedState = localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(initialLoggedState);
  useEffect(()=>{
    localStorage.setItem("isLoggedIn",isLoggedIn);
  },[isLoggedIn])

  const login = () => {
    setIsLoggedIn(true);
    // const token_object = JSON.parse(localStorage.getItem('Token'));

    // if (token_object) {
    //   setIsLoggedIn(true);
    // } else {
    //   setIsLoggedIn((prev) => prev = false);
    // }
  };

  const logout = () => {
    setIsLoggedIn(false);
    // localStorage.removeItem('Token');
    // setIsLoggedIn((prev)=> prev = false);
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
