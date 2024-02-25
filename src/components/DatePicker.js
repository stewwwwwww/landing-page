import React, { useEffect } from "react";
import { useState, useRef } from "react";
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
      0,
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
      event.target.innerHTML,
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
    <div className="flex-column z-1 relative flex items-center justify-center">
      <div
        className="relative flex h-[3.125rem] w-[25rem] cursor-pointer items-center justify-center border-[1px] border-[#f5efdb] border-[solid] bg-transparent font-cormorant text-[16px] font-semibold capitalize not-italic lining-nums tabular-nums leading-[175%] tracking-[0.64px] text-[#aaa]"
        onClick={handleOpenCalendar}
      >
        {selectedDate}
        <div
          className="absolute right-5 border-l-[0.4rem] border-r-[0.4rem]
          border-t-[0.6rem] border-l-transparent
          border-r-transparent border-t-[#f5efdb]"
        ></div>
      </div>
      <div
        className="datePickerDate absolute top-16 z-10 hidden w-[22.5rem] flex-col justify-center gap-4 border-[1px] border-[#f5efdb] border-[solid] bg-[#0c0c0c] p-5 text-center"
        ref={eRef}
      >
        <div className="size relative grid w-full grid-cols-[1fr_1.3fr_2.2fr_2.2fr_1.3fr_1fr] place-items-center">
          <div
            className="dateLeftCursor 
            border-r-[#f5efdb]] col-span-1
            col-start-1 cursor-pointer
            border-b-[0.4rem] border-r-[0.6rem]
            border-t-[0.4rem] border-b-transparent
            border-t-transparent"
            onClick={handlePrevCalendar}
          ></div>
          <div className="col-span-1 col-start-3 text-[#aaa]">
            {month[date.getMonth()]}
          </div>
          <div className="col-span-1 col-start-4 text-[#aaa]">
            {date.getFullYear()}
          </div>
          <div
            className=" dateRightCursor
            col-span-1 col-start-6
            cursor-pointer border-b-[0.4rem]
            border-l-[0.6rem] border-t-[0.4rem]
            border-b-transparent border-l-[#f5efdb]
            border-t-transparent"
            onClick={handleNextCalendar}
          ></div>
        </div>
        <div className="grid cursor-default grid-cols-7">
          <p className=" m-0 cursor-default text-[#aaa]">Mo</p>
          <p className=" m-0 cursor-default text-[#aaa]">Tu</p>
          <p className=" m-0 cursor-default text-[#aaa]">We</p>
          <p className=" m-0 cursor-default text-[#aaa]">Th</p>
          <p className=" m-0 cursor-default text-[#aaa]">Fr</p>
          <p className=" m-0 cursor-default text-[#aaa]">Sa</p>
          <p className=" m-0 cursor-default text-[#aaa]">Su</p>
        </div>
        <div className="dateDays grid grid-cols-7 grid-rows-6 gap-2 text-[#aaa]">
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
          <p className="m-0"></p>
        </div>
      </div>
    </div>
  );
}

export default DatePicker;
