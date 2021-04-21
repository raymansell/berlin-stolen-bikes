import styles from '../../assets/styles/components/Skeleton.module.scss';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonCard = () => {
  return (
    <div className={styles['skeleton-wrapper']}>
      <div className={styles['skeleton-card']}>
        <div className={styles['thumbnail-container']}>
          <SkeletonElement type='thumbnail' />
        </div>
        <div>
          <SkeletonElement type='title' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
          <SkeletonElement type='text' />
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonCard;
