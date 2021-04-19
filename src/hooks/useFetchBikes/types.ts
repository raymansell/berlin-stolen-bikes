export type APIParams = {
  description?: string;
  occurred_after?: string;
  occurred_before?: string;
};

export type BikeTheft = {
  id: string;
  title: string;
  description: string;
  address: string;
  occurred_at: number;
  updated_at: number;
  media: {
    image_url: string | null;
    image_url_thumb: string | null;
  };
};

export const MAKE_REQUEST = 'make-request';
export const GET_DATA = 'get-data';
export const ERROR = 'error';

export type State = {
  bikes: BikeTheft[];
  isLoading: boolean;
  error: Error | null;
};

export type Action =
  | {
      type: typeof MAKE_REQUEST;
    }
  | {
      type: typeof GET_DATA;
      payload: { bikes: BikeTheft[] };
    }
  | {
      type: typeof ERROR;
      payload: { error: Error };
    };
