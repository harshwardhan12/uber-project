import React from 'react'

const WaitingForDriver = (props) => {
  const { selectedVehicle } = props;
  return (
    <div>
      <h5
        onClick={() => {
          props.setWaitingForDriver(false);
        }}
        className="p-1 text-center absolute w-[93%] top-0 "
      >
        <i className="text-3xl text-gray-200 font-semibold ri-arrow-down-wide-line"></i>
      </h5>
      {/* <h3 className="text-2xl font-semibold mb-5">Waiting for the driver</h3> */}

      <div className='flex items-center justify-between'>
        <img className="h-20 " src={selectedVehicle.img} alt="" />
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
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kaikondrahalli, Bengaluru, Karnataka
              </p>
            </div>
          </div>

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
              <h3 className="text-lg font-semibold">{selectedVehicle.price}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver