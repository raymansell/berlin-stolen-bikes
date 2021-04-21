/* eslint-disable react/self-closing-comp */

import styles from '../../assets/styles/components/Skeleton.module.scss';

const Shimmer = () => {
  return (
    <div className={styles['shimmer-wrapper']}>
      <div className={styles.shimmer}></div>
    </div>
  );
};

export default Shimmer;
