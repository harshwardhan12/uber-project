import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null); // Track selected vehicle
  const vehicleFoundRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false); // New state for WaitingForDriver
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    setPickup("");
    setDestination("");
  };

  useGSAP(function FirstPanel() {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: "70%", padding: 24 });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(panelRef.current, { height: "0%" });
      gsap.to(panelCloseRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(vehiclePanelRef.current, { transform: "translateY(100%)" });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(confirmRidePanelRef.current, { transform: "translateY(100%)" });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, { transform: "translateY(0)" });
    } else {
      gsap.to(vehicleFoundRef.current, { transform: "translateY(100%)" });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      console.log("Waiting for driver");
      gsap.to(waitingForDriverRef.current, { transform: "translateY(0)" });
    } else {
      console.log("Not waiting for driver");
      gsap.to(waitingForDriverRef.current, { transform: "translateY(0%)" });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-8 top-8"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-end absolute top-0 w-full h-screen">
        <div className="h-[30%] relative p-6 bg-white rounded-t-lg">
          <h5
            ref={panelCloseRef}
            onClick={() => setPanelOpen(false)}
            className="absolute opacity-0 text-2xl top-6 right-6"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={submitHandler}>
            <div className="relative">
              {/* Circle icon */}
              <div className="absolute top-[31%] left-5 w-3 h-3 bg-black rounded-full"></div>
              {/* Vertical line */}
              <div className="absolute rounded-xl top-[42%] left-[25px] w-[2px] h-[2.6rem] bg-gray-600"></div>
              {/* Square icon */}
              <div className="absolute top-[77%] left-5 w-3 h-3 bg-black"></div>
              <input
                onClick={() => setPanelOpen(true)}
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="pl-12 py-2 w-full text-lg bg-[#eee] rounded-lg mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => setPanelOpen(true)}
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 py-2 w-full text-lg bg-[#eee] rounded-lg mt-3"
                type="text"
                placeholder="Enter your destination"
              />
            </div>
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed w-full bg-white z-10 translate-y-full bottom-0 px-3 py-10 pt-12 rounded-t-xl"
      >
        <VehiclePanel
          setVehiclePanel={setVehiclePanel}
          setConfirmRidePanel={setConfirmRidePanel}
          setSelectedVehicle={setSelectedVehicle} // Pass function to set selected vehicle
          setPanelOpen={setPanelOpen}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-6 pt-12 bg-white rounded-t-xl"
      >
        {selectedVehicle && !vehicleFound && (
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setVehiclePanel}
            setVehicleFound={setVehicleFound}
            selectedVehicle={selectedVehicle} // Pass selected vehicle details
          />
        )}
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-6 pt-12 bg-white rounded-t-xl"
      >
        {selectedVehicle && vehicleFound && !waitingForDriver && (
          <LookingForDriver
            setConfirmRidePanel={setConfirmRidePanel}
            setVehicleFound={setVehicleFound}
            setWaitingForDriver={setWaitingForDriver} // Pass function to set waitingForDriver
            selectedVehicle={selectedVehicle} // Pass selected vehicle details
          />
        )}
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 translate-y-full bottom-0 px-3 py-6 pt-12 bg-red-500 rounded-t-xl"
      >
        {selectedVehicle && vehicleFound && (
          <WaitingForDriver
            setConfirmRidePanel={setConfirmRidePanel}
            setVehicleFound={setVehicleFound}
            setWaitingForDriver={setWaitingForDriver}
            selectedVehicle={selectedVehicle} // Pass selected vehicle details
          />
        )}
      </div>
    </div>
  );
};

export default Home;