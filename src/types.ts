export interface LoginInputFields {
  email: string;
  password: string;
}

export interface SignupInputFields extends LoginInputFields {
  password2: string;
}

export interface AuthErrors {
  email?: string;
  password?: string;
  password2?: string;
}
