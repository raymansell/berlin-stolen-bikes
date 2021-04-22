import { Link, Redirect, useLocation } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { AuthErrors, LoginInputFields } from '../../types';
import { authValidator } from '../../utils/validators';
import { useAuth } from '../../context/Authentication/AuthenticationContext';
import styles from '../../assets/styles/components/Auth.module.scss';

interface LocationState {
  from: {
    pathname: string;
  };
}

const LogIn = () => {
  const {
    login,
    state: { user, redirectToReferrer },
  } = useAuth();

  const [values, errors, handleChange, handleSubmit] = useForm<
    LoginInputFields,
    AuthErrors
  >({ email: '', password: '' }, authValidator, login);

  const { state } = useLocation<LocationState>();

  if (redirectToReferrer === true || user?.token) {
    return <Redirect to={state?.from || '/'} />;
  }

  return (
    <div
      className={`${styles['form-container']} ${styles['form-container-login']}`}
    >
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1>Welcome back!</h1>
        {errors?.serverError && (
          <p className={styles['error-message']}>{errors.serverError}</p>
        )}
        <div className={styles['form-inputs']}>
          <label htmlFor='email' className={styles['form-label']}>
            Email
          </label>
          <input
            type='email'
            id='email'
            className={styles['form-input']}
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors?.email && <p>{errors.email}</p>}
        </div>
        <div className={styles['form-inputs']}>
          <label htmlFor='password' className={styles['form-label']}>
            Password
          </label>
          <input
            type='password'
            id='password'
            className={styles['form-input']}
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors?.password && <p>{errors.password}</p>}
        </div>
        <button className={styles['form-input-btn']} type='submit'>
          Log In
        </button>
        <span className={styles['form-input-signup']}>
          Don&apos;t have an account? Sign Up <Link to='/register'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default LogIn;
