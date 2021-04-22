import { useReducer, useEffect } from 'react';
import { stringify } from 'query-string';
import { useAuth } from '../../context/Authentication/AuthenticationContext';
import {
  APIParams,
  State,
  Action,
  MAKE_REQUEST,
  GET_DATA,
  ERROR,
  UPDATE_HAS_NEXT_PAGE,
} from './types';

const initialState: State = {
  bikes: [],
  isLoading: true,
  error: null,
  hasNextPage: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case MAKE_REQUEST: {
      return initialState;
    }
    case GET_DATA: {
      return { ...state, isLoading: false, bikes: action.payload.bikes };
    }
    case UPDATE_HAS_NEXT_PAGE: {
      return { ...state, hasNextPage: action.payload.hasNextPage };
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

const BASE_URL = process.env.REACT_APP_BIKEWISE_API;

const useFetchBikes = (params: APIParams, page: number): State => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    dispatch({ type: MAKE_REQUEST });

    const abortCtrl1 = new AbortController();

    const opts = {
      signal: abortCtrl1.signal,
      // asuming the Bikewise API required authorizatin to fetch the bikes list
      headers: { Authorization: `Bearer ${user.token}` },
    };

    fetch(`${BASE_URL}&${stringify({ ...params, page })}`, opts)
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

    const abortCtrl2 = new AbortController();
    const opts2 = { ...opts, signal: abortCtrl2.signal };

    fetch(`${BASE_URL}&${stringify({ ...params, page: page + 1 })}`, opts2)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error(`Error: ${res.status}`);
      })
      .then((data) =>
        dispatch({
          type: UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: data.incidents.length !== 0 },
        })
      )
      .catch((err) => {
        if (err.name === 'AbortError') return;
        dispatch({ type: ERROR, payload: { error: err } });
      });

    return () => {
      abortCtrl1.abort();
      abortCtrl2.abort();
    };
  }, [user.token, params, page]);

  return state;
};

export default useFetchBikes;
