import React from "react";
import "../styles/Reserve.css";
import Dropdown from "./Dropdown";
import DatePicker from "./DatePicker";
import PopUp from "./PopUp";
import { useState } from "react";
import {reserveData} from "../data/data.js"

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
      document.getElementsByClassName("reservationWarining")[0].style.display =
        "none";
      document.body.style.opacity = "1";
      document.body.style.overflow = "hidden";
    } else {
      document.getElementsByClassName("reservationWarining")[0].style.display =
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
    <div className="reserveContainer">
      <PopUp
        title="Reservation Confirmed"
        subtitle="We Are Looking Forward To Seeing You"
        description={`Your table was book on ${reserveDate} at ${reserveTime} for ${preservePeople} `}
      />
      <div className="reserveContent">
        <h5 className="reserveTitle">Reservations</h5>
        <div className="linear3"></div>
        <h2>Book A Table</h2>
        <div className="reserveInput">
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
        <button className="reserveButton" onClick={handleReservePopUp}>
          Reserve
        </button>
        <p className="reservationWarining">Please input valid information!</p>
      </div>
    </div>
  );
}

export default Reserve;
