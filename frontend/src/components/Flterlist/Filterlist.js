import React from 'react'
import {useNavigate} from 'react-router-dom'

import './filterlist.scss'



const Filterlist = ({style}) => {

  const navigate = useNavigate()


  return (
    <div>
       <div  className="searchItem">
          <img
            src="https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt=""

            className={ style ?'img-siz-dcrs' : "siImg"}
          />
          <div className="siDesc" onClick={()=> { navigate('/hotel/2') }} >
            <h1 className= {  style ? 'NameFountsiz': "siTitle"}>Tower Street Apartments</h1>
           <h6>Calicut</h6>
          
          </div>
          <div className="siDetails">
            <div className="siRating">
            <div className="star-rate">
              <span>Excellent</span>
              <div className="stars">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              </div>  
            </div>
              <button>8.9</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">5000</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              {/* <button className= {style ? "siCheckButton-foint-siz" :"siCheckButton" } >See availability</button> */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Filterlist
