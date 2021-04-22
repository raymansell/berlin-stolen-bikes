import { Link, Redirect } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { AuthErrors, SignupInputFields } from '../../types';
import { authValidator } from '../../utils/validators';
import { useAuth } from '../../context/Authentication/AuthenticationContext';
import styles from '../../assets/styles/components/Auth.module.scss';

const SignUp = () => {
  const {
    signup,
    state: { user },
  } = useAuth();

  const [values, errors, handleChange, handleSubmit] = useForm<
    SignupInputFields,
    AuthErrors
  >({ email: '', password: '', password2: '' }, authValidator, signup);

  if (user?.token) {
    return <Redirect to='/' />;
  }

  return (
    <div className={styles['form-container']}>
      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <h1>Get started with us today!</h1>
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
        <div className={styles['form-inputs']}>
          <label htmlFor='password2' className={styles['form-label']}>
            Confirm Password
          </label>
          <input
            type='password'
            id='password2'
            className={styles['form-input']}
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors?.password2 && <p>{errors.password2}</p>}
        </div>
        <button className={styles['form-input-btn']} type='submit'>
          Sign up
        </button>
        <span className={styles['form-input-login']}>
          Already have an account? Log In <Link to='/login'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
