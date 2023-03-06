import React from 'react'
import Navebar from '../../pages/NSVEBAR/Navebar'
import SideBar from '../../pages/SideBar/SideBar'
import Users from '../../pages/UERS/Users'
const UsersList = () => {
  return (
    <>
     <Navebar />
     <SideBar/>
      <div class="container-fluid main-container">
        <Users/>
      </div>
    
      
    </>
  )
}

export default UsersList
