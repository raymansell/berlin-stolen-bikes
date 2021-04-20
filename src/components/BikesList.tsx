import { useState } from 'react';
import { APIParams } from '../hooks/useFetchBikes/types';
import useFetchBikes from '../hooks/useFetchBikes/useFetchBikes';
import BikeCard from './BikeCard';
import BikesPagination from './BikesPagination';

const BikesList = () => {
  const [params, setParams] = useState<APIParams>({});
  const [page, setPage] = useState(1);

  const { bikes, isLoading, hasNextPage, error } = useFetchBikes(params, page);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <BikesPagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
      {isLoading && <h1>loading...</h1>}
      {error && <h4>Oops something went wrong. Try refreshing.</h4>}
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
      <BikesPagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
    </div>
  );
};

export default BikesList;
