import { useReducer, useEffect } from 'react';
import { useAuth } from '../../context/Authentication/AuthenticationContext';
import {
  APIParams,
  State,
  Action,
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
} from './types';

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case MAKE_REQUEST: {
      return { ...state, isLoading: true, bikes: [] };
    }
    case GET_DATA: {
      return { ...state, isLoading: false, bikes: action.payload.bikes };
    }
    case ERROR: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        bikes: [],
      };
    }
    default:
      return state;
  }
};

const initialState: State = {
  bikes: [],
  isLoading: true,
  error: null,
};

const useFetchBikes = (): State => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    dispatch({ type: MAKE_REQUEST });

    const abortCtrl = new AbortController();

    const opts = {
      signal: abortCtrl.signal,
      // asuming the Bikewise API required authorizatin to fetch the bikes list
      headers: { Authorization: `Bearer ${user.token}` },
    };

    fetch(
      'https://bikewise.org:443/api/v2/incidents?per_page=10&incident_type=theft',
      opts
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Error: ${res.status}`); // failed HTTP responses (4xx 5xx)
      })
      .then((data) =>
        dispatch({ type: GET_DATA, payload: { bikes: data.incidents } })
      )
      .catch((err) => {
        if (err.name === 'AbortError') return; // ignoring errors due to cancelling
        dispatch({ type: ERROR, payload: { error: err } });
      });

    return () => abortCtrl.abort();
  }, [user.token]);

  return state;
};

export default useFetchBikes;
