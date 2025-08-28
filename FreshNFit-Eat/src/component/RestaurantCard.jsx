import Image_URL from "./utils/constants";
const ReasaurantCard =(props) =>{
  const{resData} = props;
   const {
   cloudinaryImageId,
     name,
     cuisines,
     avgRating,
     costForTwo,
     deliveryTime,} = resData?.info
    // Destructuring of Props
  
  return(
    <div className="res-card">
    <img src={Image_URL+cloudinaryImageId} alt="" />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  )
}
export default ReasaurantCard