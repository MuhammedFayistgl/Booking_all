import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()

  return (
    <>
     
        <div class="col-md-2 sidebar">
          <ul class="nav nav-pills nav-stacked">
            <li class="active">
              <a onClick={(e)=> navigate('/',console.log(e))} >Dashboard</a>
            </li>
            <li>
              <a onClick={()=> navigate('/')} >Chart</a>
            </li>
            <li>
              <a onClick={()=> navigate('/')} >forms</a>
            </li>
            <li>
            <a 
            onClick={()=> navigate('/users')}>Users</a>
            </li>
            <li>
              <a  onClick={()=> navigate('/Posts')} >Posts</a>
            </li>
          </ul>
        </div>
       

       
     
    </>
  )
}


export default SideBar
