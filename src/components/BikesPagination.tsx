import { Dispatch, SetStateAction } from 'react';
import styles from '../assets/styles/components/BikesPagination.module.scss';

interface BikesPaginationProps {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  hasNextPage: boolean;
}

const BikesPagination = ({
  page,
  setPage,
  hasNextPage,
}: BikesPaginationProps) => {
  const adjustPage = (amount: number) => {
    setPage((prevPage) => prevPage + amount);
  };

  return (
    <div className={styles['pagination-wrapper']}>
      {/* '<' symbol */}
      {page !== 1 && (
        <button
          className={`${styles['page-item']} ${styles.sides}`}
          onClick={() => adjustPage(-1)}
        >
          &lt;
        </button>
      )}

      {/* if we're on a page past #2, we can jump back to #1 */}
      {page !== 1 && (
        <button className={styles['page-item']} onClick={() => setPage(1)}>
          1
        </button>
      )}

      {page > 2 && <div className={styles.separator}>...</div>}

      {page > 2 && (
        <button className={styles['page-item']} onClick={() => adjustPage(-1)}>
          {page - 1}
        </button>
      )}

      {/* current page */}
      <button className={`${styles['page-item']} ${styles.active}`}>
        {page}
      </button>

      {hasNextPage && (
        <button
          className={`${styles['page-item']}`}
          onClick={() => adjustPage(1)}
        >
          {page + 1}
        </button>
      )}

      {/* '>' symbol */}
      {hasNextPage && (
        <button
          className={`${styles['page-item']} ${styles.sides}`}
          onClick={() => adjustPage(1)}
        >
          &gt;
        </button>
      )}
    </div>
  );
};

export default BikesPagination;
