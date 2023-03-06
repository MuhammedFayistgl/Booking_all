import React from 'react'
import './statusCard.scss'
const StatusCard = () => {
  return (
    <>
     <div className="card-cantainer ">
     {/* status box */}
        <div className="card bg-1 b-shw">
            <div className="card-header ">
                <div className="icone">
                <i class="fa-regular fa-bookmark"></i>
                </div>
                <div className="content">
                    <span>New Booking</span>
                    <span className='value'>656</span>
                </div>
            </div> 
            <hr />
            <div className="card-body ">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>refresh</span>
           
            </div>
        </div>
        <div className="card bg-2 b-shw">
            <div className="card-header ">
                <div className="icone">
                <i class="fa-solid fa-calendar-days"></i>
                </div>
                <div className="content">
                    <span>Schedule Room</span>
                    <span className='value'>656</span>
                </div>
            </div> 
            <hr />
            <div className="card-body ">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>refresh</span>
           
            </div>
        </div>
        <div className="card bg-3 b-shw">
            <div className="card-header ">
                <div className="icone">
                <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </div>
                <div className="content">
                    <span>Check In</span>
                    <span className='value'>656</span>
                </div>
            </div> 
            <hr />
            <div className="card-body ">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>refresh</span>
           
            </div>
        </div>
        <div className="card bg-4 b-shw">
            <div className="card-header ">
                <div className="icone">
                <i class="fa-solid fa-right-from-bracket"></i>
                </div>
                <div className="content">
                    <span>Check Out</span>
                    <span className='value'>656</span>
                </div>
            </div> 
            <hr />
            <div className="card-body ">
            <i class="fa-solid fa-arrows-rotate"></i>
            <span>refresh</span>
           
            </div>
        </div>
     </div> 
    </>
  )
}

export default StatusCard
