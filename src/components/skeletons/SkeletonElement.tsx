/* eslint-disable react/self-closing-comp */
import styles from '../../assets/styles/components/Skeleton.module.scss';

interface SkeletonElementProps {
  type: string;
}

const SkeletonElement = ({ type }: SkeletonElementProps) => {
  return <div className={`${styles.skeleton} ${styles[type]}`}></div>;
};

export default SkeletonElement;
