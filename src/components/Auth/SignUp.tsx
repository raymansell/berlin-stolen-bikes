import { Link } from 'react-router-dom';
import styles from '../../assets/styles/components/Auth.module.scss';

const SignUp = () => {
  return (
    <div className={styles['form-container']} style={{ marginTop: '5rem' }}>
      <form className={styles.form}>
        <h1>Get started with us today!</h1>
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
          />
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
