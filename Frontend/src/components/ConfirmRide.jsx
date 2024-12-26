// import React from "react";

// const ConfirmRide = (props) => {
//   return (
//     <div>
//       <h5
//         onClick={() => {
//           props.setConfirmRidePanel(false);
//           props.setPanelOpen(true);
//         }}
//         className="p-1 text-center absolute w-[93%] top-0 "
//       >
//         <i className="text-3xl text-gray-200 font-semibold ri-arrow-down-wide-line"></i>
//       </h5>
//       <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

//       <div>
//         <img src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
//       </div>
      

//     </div>
//   );
// };

// export default ConfirmRide;



import React from "react";

const ConfirmRide = (props) => {
  const { selectedVehicle } = props; // Destructure selected vehicle data

  return (
    <div>
      <h5
        onClick={() => {
          props.setConfirmRidePanel(false);
          props.setVehiclePanel(true);
        }}
        className="p-1 text-center absolute w-[93%] top-0 "
      >
        <i className="text-3xl text-gray-200 font-semibold ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>

      {/* Display selected vehicle details */}
      <div className="flex flex-col gap-2 items-center justify-between">
        <img className="h-20 " src={selectedVehicle.img} alt="" />
        <div className="w-full  ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kaikondrahalli, Bengaluru, Karnataka</p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-semibold">Third Wave Coffee</h3>
              <p className="text-sm -mt-1 text-gray-600">17th Cross Rd, PWD Quarters, 1st Sector, Bengaluru, Karnataka  </p>
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
        
        <button onClick={()=>{
          props.setVehicleFound(true)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold py-2 rounded-lg">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmRide;
