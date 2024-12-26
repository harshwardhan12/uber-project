// import React from "react";

// const VehiclePanel = (props) => {
//   return (
//     <div>
//       <h5
//         onClick={() => {
//           props.setVehiclePanel(false);
//           props.setPanelOpen(true);
//         }}
//         className="p-1 text-center absolute w-[93%] top-0 "
//       >
//         <i className="text-3xl text-gray-200 font-semibold ri-arrow-down-wide-line"></i>
//       </h5>

//       <h3 className="text-2xl font-semibold mb-5">Choose a ride</h3>

//       <div onClick={()=>{
//         props.setConfirmRidePanel(true);
//         props.setVehiclePanel(false);
//       }} className="car flex active:border-black mb-2 border-2 rounded-xl w-full p-3 items-center justify-between">
//         <img
//           className="h-14"
//           src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
//           alt=""
//         />
//         <div className="w-1/2 ml-2">
//           <h4 className="text-base font-medium">
//             UberGo{" "}
//             <span>
//               <i className="ri-user-3-fill"></i>4
//             </span>
//           </h4>
//           <h5 className="text-base font-medium">2 mins away</h5>
//           <p className="text-sm font-medium text-gray-600">
//             Affordable, compact rides
//           </p>
//         </div>
//         <h2 className="text-lg font-semibold">₹193.20</h2>
//       </div>

//       <div onClick={()=>{
//         props.setConfirmRidePanel(true);
//         props.setVehiclePanel(false);
//       }} className="moto flex active:border-black mb-2 border-2 rounded-xl w-full p-3 items-center justify-between">
//         <img
//           className="h-14"
//           src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png"
//           alt=""
//         />
//         <div className="w-1/2 -ml-5">
//           <h4 className="text-base font-medium">
//             Moto{" "}
//             <span>
//               <i className="ri-user-3-fill"></i>1
//             </span>
//           </h4>
//           <h5 className="text-base font-medium">3 mins away</h5>
//           <p className="text-sm font-medium text-gray-600">
//             Affordable motorcycle rides
//           </p>
//         </div>
//         <h2 className="text-lg font-semibold">₹65</h2>
//       </div>

//       <div onClick={()=>{
//         props.setConfirmRidePanel(true);
//         props.setVehiclePanel(false);
//       }} className="auto flex active:border-black mb-2 border-2 rounded-xl w-full p-3 items-center justify-between">
//         <img
//           className="h-14"
//           src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
//           alt=""
//         />
//         <div className="w-1/2 ml-2">
//           <h4 className="text-base font-medium">
//             UberAuto{" "}
//             <span>
//               <i className="ri-user-3-fill"></i>3
//             </span>
//           </h4>
//           <h5 className="text-base font-medium">2 mins away</h5>
//           <p className="text-sm font-medium text-gray-600">
//             Affordable auto rides
//           </p>
//         </div>
//         <h2 className="text-lg font-semibold">₹118.20</h2>
//       </div>
//     </div>
//   );
// };

// export default VehiclePanel;











import React from "react";

const VehiclePanel = (props) => {
  const handleVehicleSelect = (vehicle) => {
    props.setConfirmRidePanel(true);
    props.setVehiclePanel(false);
    props.setSelectedVehicle(vehicle); // Pass the selected vehicle data
  };

  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
          props.setPanelOpen(true);
        }}
        className="p-1 text-center absolute w-[93%] top-0 "
      >
        <i className="text-3xl text-gray-200 font-semibold ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Choose a ride</h3>

      {/* Vehicle options */}
      {[
        {
          name: "UberGo",
          passengers: 4,
          time: "2 mins away",
          description: "Affordable, compact rides",
          price: "₹193.20",
          img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png",
        },
        {
          name: "Moto",
          passengers: 1,
          time: "3 mins away",
          description: "Affordable motorcycle rides",
          price: "₹65",
          img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1649230978/assets/a2/553a18-2f77-4722-a4ba-f736f4cb405e/original/Uber_Moto_Orange_558x372_pixels_Desktop.png",
        },
        {
          name: "UberAuto",
          passengers: 3,
          time: "2 mins away",
          description: "Affordable auto rides",
          price: "₹118.20",
          img: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_384,w_576/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png",
        },
      ].map((vehicle, index) => (
        <div
          key={index}
          onClick={() => handleVehicleSelect(vehicle)}
          className="flex active:border-black mb-2 border-2 rounded-xl w-full p-3 items-center justify-between"
        >
          <img className="h-14" src={vehicle.img} alt="" />
          <div className="w-1/2 ml-2">
            <h4 className="text-base font-medium">
              {vehicle.name}{" "}
              <span>
                <i className="ri-user-3-fill"></i>
                {vehicle.passengers}
              </span>
            </h4>
            <h5 className="text-base font-medium">{vehicle.time}</h5>
            <p className="text-sm font-medium text-gray-600">
              {vehicle.description}
            </p>
          </div>
          <h2 className="text-lg font-semibold">{vehicle.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default VehiclePanel;
