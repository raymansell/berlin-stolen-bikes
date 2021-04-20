import { ChangeEvent } from 'react';
import dayjs from 'dayjs';
import styles from '../assets/styles/components/SearchForm.module.scss';
import { APIParams } from '../hooks/useFetchBikes/types';

interface SearchFormProps {
  params: APIParams;
  onParamChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm = ({ params, onParamChange }: SearchFormProps) => {
  return (
    <section className={styles['form-container']}>
      <form>
        <div className={styles['form-row']}>
          <div className={styles['form-item']}>
            <label htmlFor='description'>Description</label>
            <input
              type='text'
              id='description'
              placeholder='Search case description'
              name='query'
              value={params.query ? params.query : ''}
              onChange={onParamChange}
            />
          </div>
        </div>
        <div className={styles['form-grid']}>
          <div className={styles['form-item']}>
            <label htmlFor='occurred_after'>Ocurred after</label>
            <input
              type='date'
              id='occurred_after'
              name='occurred_after'
              value={
                params.occurred_after
                  ? dayjs.unix(params.occurred_after).format('YYYY-MM-DD')
                  : ''
              }
              onChange={onParamChange}
            />
          </div>
          <div className={styles['form-item']}>
            <label htmlFor='occurred_before'>Ocurred Before</label>
            <input
              type='date'
              id='occurred_before'
              name='occurred_before'
              value={
                params.occurred_before
                  ? dayjs.unix(params.occurred_before).format('YYYY-MM-DD')
                  : ''
              }
              onChange={onParamChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
