import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { BikeTheft } from '../hooks/useFetchBikes/types';
import styles from '../assets/styles/components/BikeCard.module.scss';
import noImage from '../assets/static/no-image.svg';

dayjs.extend(advancedFormat);

interface BikeProps {
  bike: BikeTheft;
}

const BikeCard = ({ bike }: BikeProps) => {
  return (
    <div className={styles['bike-card']}>
      <div className={styles['bike-img-container']}>
        {bike.media.image_url_thumb ? (
          <img
            className={styles['bike-img']}
            src={bike.media.image_url_thumb}
            alt={bike.title}
          />
        ) : (
          <img
            className={styles['bike-img']}
            src={noImage}
            alt='unavailable bike'
          />
        )}
      </div>
      <div className={styles['bike-info']}>
        <h2 className={styles['bike-title']}>{bike.title}</h2>
        <p className={styles['bike-detail']}>{bike.description}</p>
        <p className={styles['bike-detail']}>
          <strong> Ocurred at: </strong>
          {dayjs.unix(bike.occurred_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </p>
        <p className={styles['bike-detail']}>
          <strong>Reported at: </strong>
          {dayjs.unix(bike.updated_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
        </p>
        <p className={styles['bike-detail']}>Location: {bike.address}</p>
      </div>
    </div>
  );
};

export default BikeCard;
