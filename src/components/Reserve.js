import React from "react";
import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";
import PopUp from "./PopUp";
import { useState } from "react";
import { reserveData } from "../data/data.js";

function Reserve() {
  const [reserveDate, setReserveDate] = useState();
  const [preservePeople, setReservePeople] = useState();
  const [reserveTime, setReserveTime] = useState();
  const [reserveDateValid, setReserveDateValid] = useState();
  const [reservePeopleValid, setReservePeopleValid] = useState();
  const [reserveTimeValid, setReserveTimeValid] = useState();
  const handleReservePopUp = (event) => {
    event.preventDefault();
    if (reserveDateValid && reservePeopleValid && reserveTimeValid) {
      document.getElementsByClassName("popUpScreen")[0].style.cssText =
        "display: flex";
      document.getElementsByClassName("reservationWarning")[0].style.display =
        "none";
      document.body.style.opacity = "1";
      document.body.style.overflow = "hidden";
    } else {
      document.getElementsByClassName("reservationWarning")[0].style.display =
        "block";
    }
  };
  const getSelectedReserveDate = (date) => {
    setReserveDate(date);
  };
  const getSelectedReserveTime = (date) => {
    setReserveTime(date);
  };
  const getSelectedReservePeople = (date) => {
    setReservePeople(date);
  };
  const getReserveDateValid = (date) => {
    setReserveDateValid(date);
  };
  const getReserveTimeValid = (date) => {
    setReserveTimeValid(date);
  };
  const getReservePeopleValid = (date) => {
    setReservePeopleValid(date);
  };
  return (
    <div className="flex h-[48.125rem] items-center justify-center">
      <PopUp
        title="Reservation Confirmed"
        subtitle="We Are Looking Forward To Seeing You"
        description={`Your table was book on ${reserveDate} at ${reserveTime} for ${preservePeople} `}
      />
      <div className="relative flex h-[29.375rem] w-[85.625rem] flex-col items-center justify-center border-[1px] border-[#dcca8733] bg-[#0c0c0c]">
        <h5 className="m-0 mb-5 text-[#fff]">Reservations</h5>
        <div className="m-0 mb-4 h-0.5 w-16 bg-[linear-gradient(_to_left,_rgba(220,_202,_135,_1),_rgba(220,_202,_135,_0.24),_rgba(220,_202,_135,_1)_)]"></div>
        <h2 className="m-0 mb-11 text-[#dcca87]">Book A Table</h2>
        <div className="m-0 mb-11 flex w-[83.5] justify-around gap-8">
          <Dropdown
            dropdownId="0"
            selector="Number of People"
            dropdownList={reserveData.peopleList}
            getSelectedReservePeople={getSelectedReservePeople}
            getReservePeopleValid={getReservePeopleValid}
          />
          <DatePicker
            datePickerId="0"
            selector={"Date"}
            getSelectedReserveDate={getSelectedReserveDate}
            getReserveDateValid={getReserveDateValid}
          />

          <Dropdown
            dropdownId="1"
            selector="Arrival Time"
            dropdownList={reserveData.timeList}
            getSelectedReserveTime={getSelectedReserveTime}
            getReserveTimeValid={getReserveTimeValid}
          />
        </div>
        <button onClick={handleReservePopUp}>Reserve</button>
        <p className="reservationWarning absolute bottom-6 hidden text-red-600">
          Please input valid information!
        </p>
      </div>
    </div>
  );
}

export default Reserve;
