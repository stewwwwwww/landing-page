import React, { useEffect } from "react";
import { useState, useRef } from "react";
import "../styles/DatePicker.css";
function DatePicker(props) {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const eRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(props.selector);
  useEffect(() => {
    const currentTime = new Date();
    if (date < currentTime) {
      document.getElementsByClassName("dateLeftCursor")[0].style.cssText =
        "opacity: 0.3";
    } else {
      document.getElementsByClassName("dateLeftCursor")[0].style.cssText =
        "opacity: 1";
    }
    const lastDayInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const firstWeekDayInMonth =
      new Date(date.getFullYear(), date.getMonth(), 1).getDay() === 0
        ? 6
        : new Date(date.getFullYear(), date.getMonth(), 1).getDay() - 1;
    console.log(firstWeekDayInMonth);
    let countCurrent = 1;
    for (
      let i = firstWeekDayInMonth;
      i < lastDayInMonth + firstWeekDayInMonth;
      i++
    ) {
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i
      ].innerHTML = countCurrent;
      if (
        countCurrent >= currentTime.getDate() &&
        date.getMonth() === currentTime.getMonth()
      ) {
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].style.cssText = "opacity: 1; cursor: pointer;";
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].onclick = handleDatePick;
      } else if (
        date.getMonth() === currentTime.getMonth() &&
        countCurrent < currentTime.getDate()
      ) {
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].style.cssText = "opacity: 0.3";
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].onclick = null;
      } else {
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].style.cssText = "opacity: 1; cursor: pointer;";
        document.getElementsByClassName("dateDays")[
          props.datePickerId
        ].children[i].onclick = handleDatePick;
      }
      countCurrent++;
    }
    let countLast = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = firstWeekDayInMonth; i > 0; i--) {
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i - 1
      ].innerHTML = countLast;
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i - 1
      ].style.cssText = "opacity: 0.3";
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i - 1
      ].onclick = null;
      countLast--;
    }
    let countNext = 1;
    for (let i = lastDayInMonth + firstWeekDayInMonth; i < 42; i++) {
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i
      ].innerHTML = countNext;
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i
      ].style.cssText = "opacity: 0.3";
      document.getElementsByClassName("dateDays")[props.datePickerId].children[
        i
      ].onclick = null;
      countNext++;
    }
  }, [date, selectedDate]);
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      document.getElementsByClassName("datePickerDate")[
        props.datePickerId
      ].style.display = "none";
    });
    return () => {
      document.removeEventListener("scroll", () => {
        document.getElementsByClassName("datePickerDate")[
          props.datePickerId
        ].style.display = "none";
      });
    };
  }, ["scroll"]);
  const handleNextCalendar = () => {
    setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1));
  };
  const handlePrevCalendar = () => {
    const currentTime = new Date();
    if (date > currentTime) {
      setDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1));
    }
  };
  const handleDatePick = (event) => {
    const selectedformat = new Date(
      date.getFullYear(),
      date.getMonth(),
      event.target.innerHTML
    );
    setSelectedDate(selectedformat.toDateString());
    document.getElementsByClassName("datePickerDate")[
      props.datePickerId
    ].style.cssText = "display:none";
    setDate(selectedformat);
    props.getSelectedReserveDate(selectedformat.toDateString());
    props.getReserveDateValid(true);
  };
  const handleOpenCalendar = () => {
    document.getElementsByClassName("datePickerDate")[
      props.datePickerId
    ].style.cssText = "display:flex";
    if (selectedDate !== props.selector) {
      setDate(new Date(selectedDate));
    }
  };
  const handleOutsideClick = (event) => {
    if (!eRef.current.contains(event.target)) {
      document.getElementsByClassName("datePickerDate")[
        props.datePickerId
      ].style.display = "none";
    }
  };
  return (
    <div className="datePickerContainer">
      <div className="datePickerBtn" onClick={handleOpenCalendar}>
        {selectedDate}
        <div className="dropdownCursor"></div>
      </div>
      <div className="datePickerDate" ref={eRef}>
        <div className="dateNav">
          <div className="dateLeftCursor" onClick={handlePrevCalendar}></div>
          <div className="month">{month[date.getMonth()]}</div>
          <div className="year">{date.getFullYear()}</div>
          <div className="dateRightCursor" onClick={handleNextCalendar}></div>
        </div>
        <div className="dateWeekDays">
          <p>Mo</p>
          <p>Tu</p>
          <p>We</p>
          <p>Th</p>
          <p>Fr</p>
          <p>Sa</p>
          <p>Su</p>
        </div>
        <div className="dateDays">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
