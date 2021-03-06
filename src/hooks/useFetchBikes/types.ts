export type APIParams = {
  query?: string;
  occurred_after?: number;
  occurred_before?: number;
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
export const UPDATE_HAS_NEXT_PAGE = 'update-has-next-page';
export const ERROR = 'error';

export type State = {
  bikes: BikeTheft[];
  isLoading: boolean;
  error: Error | null;
  hasNextPage: boolean;
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
      type: typeof UPDATE_HAS_NEXT_PAGE;
      payload: { hasNextPage: boolean };
    }
  | {
      type: typeof ERROR;
      payload: { error: Error };
    };
