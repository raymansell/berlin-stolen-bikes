import { Link } from 'react-router-dom';

import styles from '../../assets/styles/components/Auth.module.scss';

const LogIn = () => {
  return (
    <div
      className={`${styles['form-container']} ${styles['form-container-login']}`}
      style={{ marginTop: '5rem' }}
    >
      <form className={styles.form}>
        <h1>Welcome back!</h1>
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
          />
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
          />
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
