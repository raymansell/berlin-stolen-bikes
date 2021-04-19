import useFetchBikes from '../hooks/useFetchBikes/useFetchBikes';
import BikeCard from './BikeCard';

const BikesList = () => {
  const { bikes, isLoading, error } = useFetchBikes();
  return (
    <div>
      {isLoading && <h1>loading...</h1>}
      {error && <h4>Oops something went wrong. Try refreshing.</h4>}
      {bikes.map((bike) => (
        <BikeCard key={bike.id} bike={bike} />
      ))}
    </div>
  );
};

export default BikesList;
