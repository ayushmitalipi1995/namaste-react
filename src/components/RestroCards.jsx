import { LOGO_URL } from "../utils/common";
//Real time restaurant object

const RestroCards = (props) => {
    const { resData } = props;
    const { name, locality, costForTwo, cuisines, avgRating } = resData.info; //Destructing of Objects
    return (
      <div className="res-card">
        <img
          className="restro-logo"
          alt="res-logo"
          src={
            LOGO_URL +
            resData.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{locality}</h4>
        <h4>{costForTwo}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
      </div>
    );
  };
  
export default RestroCards;
