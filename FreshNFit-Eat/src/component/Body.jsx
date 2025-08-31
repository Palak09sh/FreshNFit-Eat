import { useState } from "react";
import ReasaurantCard from "./RestaurantCard";
import resList from "./utils/mockdata";
const Body = () =>{``
    // State Variable- super powerful variable known as hooks
     const [ListOfResturants,setListOfResturants] =useState(resList)
  return(
  <div className="body">
    <div className="search-container">
       <button className="filter-btn" onClick={() => {const filteredList = ListOfResturants.filter((res) => res.info.avgRating>4.5);
        setListOfResturants(filteredList);
            
        }}>Top Rated Resturants</button> 
           </div>
      <div className="res-container">
       
      {/* <ReasaurantCard resData = {resList[0]}/>
      <ReasaurantCard resData = {resList[1]}/>
      <ReasaurantCard resData = {resList[2]}/>
      <ReasaurantCard resData = {resList[3]}/>
      <ReasaurantCard resData = {resList[4]}/>
      <ReasaurantCard resData = {resList[5]}/>
      <ReasaurantCard resData = {resList[6]}/>
      <ReasaurantCard resData = {resList[7]}/>
      <ReasaurantCard resData = {resList[8]}/>
      <ReasaurantCard resData = {resList[9]}/>
      <ReasaurantCard resData = {resList[10]}/> */}
      {
        ListOfResturants.map((resturant) => (
         <ReasaurantCard    key={resturant.info.id} resData = {resturant}/>
        ))
      }
   
    </div>
  </div>
  )
};
export default Body