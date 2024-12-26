import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  
  return (
    <div className='h-screen'>

      <Link to="/home" className='fixed h-10 w-10 bg-white rounded-full flex items-center justify-center top-5 right-5'>
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>

      <div className='h-1/2'>
        <img
            className="h-full w-full object-cover"
            src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
            alt=""
          />
      </div>

      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img className="h-20 " src={"https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"} alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Sarthak</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
            <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
          </div>

        </div>

        {/* Display selected vehicle details */}
        <div className="flex flex-col gap-2 items-center justify-between">
          <div className="w-full  ">

            <div className="flex items-center gap-5 p-3 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-semibold">Third Wave Coffee</h3>
                <p className="text-sm -mt-1 text-gray-600">
                  17th Cross Rd, PWD Quarters, 1st Sector, Bengaluru, Karnataka{" "}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 p-3">
              <i className="text-lg ri-currency-fill"></i>
              <div>
                <h3 className="text-lg font-semibold">₹193.20</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>

          <button className='w-full mt-5 bg-green-600 text-white font-semibold py-2 rounded-lg'>Make a payment</button>
      </div>
    </div>
  )
}

export default Riding