import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from "./component/Header"
import Body from "./component/Body"
// import './index.css'
export default function AppLayout() {
  return (
    <>  
  <Header/>
  <Body/>
  
  </> 
  )
}

// createRoot(document.getElementById('root')).render(

//      <AppLayout />
  
//  )

