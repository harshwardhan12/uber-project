import React from "react";

const LocationSearchPanel = (props) => {
  console.log(props);
  const locations = [
    "456A Elmwood Avenue, Apartment 7B, Downtown District, San Francisco",
    "457B Elmwood Avenue, Apartment 7B, Downtown District, San Francisco",
    "458C Elmwood Avenue, Apartment 7B, Downtown District, San Francisco",
    "459D Elmwood Avenue, Apartment 7B, Downtown District, San Francisco",
  ];

  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setPanelOpen(false);
            props.setVehiclePanel(true);
          }} className="flex border-2 rounded-xl active:border-black p-3 gap-4 my-2 items-center justify-start ">
            <h2 className="bg-[#eee] h-10 w-20 flex items-center justify-center rounded-full ">
              <i className="ri-map-pin-fill text-xl"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
