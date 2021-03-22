import { useCallback, useContext, useState } from 'react';
import Context from '../context/UserContext';
import loginService from '../services/login';
import registerService from '../services/register';

export function useUser() {
  const { user, setUser } = useContext(Context);
  const [state, setState] = useState({ loading: false, error: false });

  const register = useCallback(
    (userData) => {
      setState({ loading: true, error: false });
      registerService(userData)
        .then((userInfo) => {
          localStorage.setItem('devs-userData', JSON.stringify(userInfo));
          setState({ loading: false, error: false });
          setUser(userInfo);
        })
        .catch((error) => {
          setState({ loading: false, error: true });
          console.error(error);
        });
    },
    [setUser],
  );

  const login = useCallback(
    ({ username, password }) => {
      setState({ loading: true, error: false });
      loginService({ username, password })
        .then((userData) => {
          localStorage.setItem('devs-userData', JSON.stringify(userData));
          setState({ loading: false, error: false });
          setUser(userData);
        })
        .catch((error) => {
          setState({ loading: false, error: true });
          console.error(error);
        });
    },
    [setUser],
  );

  const logout = useCallback(() => {
    localStorage.removeItem('devs-userData');
    setUser(null);
  }, [setUser]);

  return {
    user,
    register,
    login,
    logout,
    isLoading: state.loading,
    hasError: state.error,
  };
}
