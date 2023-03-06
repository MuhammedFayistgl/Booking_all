import React from 'react'
import StatusCard from '../../pages/STATUS_CARD/StatusCard'
import Navebar from '../../pages/NSVEBAR/Navebar'
import SideBar from '../../pages/SideBar/SideBar'


const Home = () => {
  return (
    <>
     <Navebar />
     <SideBar/>
      <div class="container-fluid main-container">
         <StatusCard></StatusCard>
      </div>
     
        
 
      
    </>
  )
}

export default Home
