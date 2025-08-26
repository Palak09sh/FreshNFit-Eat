import React from "react"
import ReactDOM from "react-dom/client"
const Header =() => {
  return(
  <div className="header">
    <div className="Logo-container">
      <img src="src\assets\Green Beige Circle Healthy Food Logo.png" alt="error" className="Logo" />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )

}
const ReasaurantCard =() =>{
  return(
    <div className="res-card">
      <h3>Meghana Foods</h3>
      <h4>Briyani,North India,Asia</h4>
      <h4>4.4 stars</h4>
      <h4>38minutes</h4>
    </div>
  )
}
const Body = () =>{
  return(
  <div className="body">
    <div className="search">
      <div className="res-container">
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/> 
      <ReasaurantCard/>
      <ReasaurantCard/>
      <ReasaurantCard/>
         <ReasaurantCard/>
 v    
      </div>
    </div>
  </div>
  )
}
export default function AppLayout() {
  return (
    <>  
  <Header/>
  <Body/>
  
  </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)

