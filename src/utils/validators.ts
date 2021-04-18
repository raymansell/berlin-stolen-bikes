import { LoginInputFields, SignupInputFields, AuthErrors } from '../types';

function isSignup(
  fields: SignupInputFields | LoginInputFields
): fields is SignupInputFields {
  return (fields as SignupInputFields).password2 !== undefined;
}

// eslint-disable-next-line import/prefer-default-export
export const authValidator = (
  values: SignupInputFields | LoginInputFields
): AuthErrors => {
  const errors = {} as AuthErrors;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be six characters or more';
  }

  if (isSignup(values)) {
    if (!values.password2) {
      errors.password2 = 'Password is required';
    } else if (values.password2 !== values.password) {
      errors.password2 = 'Passwords do not match';
    }
  }

  return errors;
};
