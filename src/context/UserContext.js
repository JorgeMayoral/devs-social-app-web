import { createContext, useEffect, useState } from 'react';

const Context = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    if (!user) {
      const userData = JSON.parse(localStorage.getItem('devs-userData'));

      if (userData) {
        setUser(userData);
      }
    }
  }, [user]);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
