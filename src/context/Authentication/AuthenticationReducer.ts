import { State, Action, SIGN_UP, LOG_IN, LOG_OUT } from './types';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case SIGN_UP:
    case LOG_IN: {
      localStorage.setItem(
        'user',
        JSON.stringify({
          token: action.payload.token,
        })
      );
      return {
        ...state,
        user: { token: action.payload.token },
        redirectToReferrer: true,
      };
    }
    case LOG_OUT:
      localStorage.removeItem('user');
      return { ...state, token: null };
    default:
      return state;
  }
};

export default reducer;
