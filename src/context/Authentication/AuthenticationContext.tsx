import React, { createContext, useReducer, useContext } from 'react';
import { LoginInputFields, SignupInputFields } from '../../types';
import authenticationReducer from './AuthenticationReducer';
import { State, Dispatch, User } from './types';

const API_URL = process.env.REACT_APP_API_URL;

const user: User = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') || '{}')
  : null;

const initialState: State = {
  user,
  redirectToReferrer: false,
};

const AuthenticationContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

type AuthenticationProviderProps = { children: React.ReactNode };

const AuthenticationProvider = ({ children }: AuthenticationProviderProps) => {
  const [state, dispatch] = useReducer(authenticationReducer, initialState);

  return (
    <AuthenticationContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthenticationContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthenticationContext');
  }

  const { state, dispatch } = context;

  const submit = (endpoint: string) => {
    return async (fields: LoginInputFields | SignupInputFields) => {
      const res = await fetch(`${API_URL}/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        const { token } = await res.json();
        dispatch({ type: 'log-in', payload: { token } });
      } else {
        const { error } = await res.json();
        throw new Error(error);
      }
    };
  };

  const login = submit('login');
  const signup = submit('register');

  return {
    state,
    dispatch,
    login,
    signup,
  };
};

export { AuthenticationProvider, useAuth };
