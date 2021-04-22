import { Link, useHistory } from 'react-router-dom';
import policeLogo from '../assets/static/berlin-police.png';
import styles from '../assets/styles/components/Header.module.scss';
import { useAuth } from '../context/Authentication/AuthenticationContext';

const Header = () => {
  const history = useHistory();

  const {
    state: { user },
    dispatch,
  } = useAuth();

  const handleLogout = () => {
    dispatch({ type: 'log-out' });
    history.push('/');
  };

  return (
    <header className={styles.wrapper}>
      <Link to='/'>
        <img
          className={styles['logo-img']}
          src={policeLogo}
          alt='berlin-police'
        />
      </Link>
      <div>
        <h1 className={styles.heading}>Police Department of Berlin</h1>
        <h3>Stolen bikes</h3>
      </div>
      {user?.token && (
        <button className={styles['logout-btn']} onClick={() => handleLogout()}>
          LOGOUT
        </button>
      )}
    </header>
  );
};

export default Header;
