export const SIGN_UP = 'sign-up';
export const LOG_IN = 'log-in';
export const LOG_OUT = 'log-out';

export type Token = string | null;
export type User = { token: Token };
export type State = { user: User };

export type Action =
  | {
      type: typeof SIGN_UP;
      payload: { token: Token };
    }
  | {
      type: typeof LOG_IN;
      payload: { token: Token };
    }
  | { type: typeof LOG_OUT };

export type Dispatch = (action: Action) => void;
