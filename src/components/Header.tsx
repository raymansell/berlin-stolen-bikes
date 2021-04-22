import { Link } from 'react-router-dom';
import policeLogo from '../assets/static/berlin-police.png';
import styles from '../assets/styles/components/Header.module.scss';

const Header = () => {
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
    </header>
  );
};

export default Header;
