import { useState, ChangeEvent } from 'react';
import dayjs from 'dayjs';
import { APIParams } from '../hooks/useFetchBikes/types';
import useFetchBikes from '../hooks/useFetchBikes/useFetchBikes';
import BikeCard from './BikeCard';
import BikesPagination from './BikesPagination';
import SearchForm from './SearchForm';
import SkeletonCard from './skeletons/SkeletonCard';

const BikesList = () => {
  const [params, setParams] = useState<APIParams>({});
  const [page, setPage] = useState(1);

  const { bikes, isLoading, hasNextPage, error } = useFetchBikes(params, page);

  const handleParamChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, name: param, value } = e.target;
    setPage(1);
    setParams((prevParams) => {
      if (type === 'date') {
        // dates are number typed as per the APIParams interface
        return { ...prevParams, [param]: dayjs(value).unix() };
      }
      return { ...prevParams, [param]: value };
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>berlin stolen bikes</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <BikesPagination
        page={page}
        setPage={setPage}
        hasNextPage={hasNextPage}
      />
      {isLoading && [1, 2, 3, 4, 5].map((n) => <SkeletonCard key={n} />)}

      {error && <h4>Oops something went wrong. Try refreshing.</h4>}
      {!isLoading && bikes.length === 0 && <h3>No results found</h3>}
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
