import RestroCards from './RestroCards';
import resList from '../utils/mockData';
const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restro-container">
          {resList.map(
            (
              restaurant //Looping through the rest array to map all the cards with rest data
            ) => (
              <RestroCards key={restaurant.info.id} resData={restaurant} /> //passing the key prop mandatory to avoid performance hit down
            )
          )}
        </div>
      </div>
    );
  };

  export default Body;