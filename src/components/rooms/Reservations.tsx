import Schema from "./Schema";
import { FC, useState } from "react";
import Calendar from "react-calendar";
import * as calendarStyles from "./calendar.module.css";
import React, { useEffect } from "react";
import { useAppDispatch } from "@/store";
import { reservationActions } from "@/store/reservations-slice";
const MONTH = [
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
const Reservations: FC<{ onReservations: (value: Date[]) => any }> = (
  props
) => {
  const dispatch = useAppDispatch();
  const [showCalendar, setShowCalendar] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [value, onChange] = useState<Date | any>([]);
  useEffect(() => {
    setShowCalendar(false);
    if (value.length > 1) {
      dispatch(reservationActions.setDateRange(value));
      setCheckIn(`${value[0].getDate()} ${MONTH[value[0].getMonth()]}`);
      setCheckOut(`${value[1].getDate()} ${MONTH[value[1].getMonth()]}`);
    }
    const datesRange = [];
    let startDate = new Date(value[0]);
    let endDate = new Date(value[value.length - 1]);
    while (startDate < endDate) {
      startDate.setDate(startDate.getDate() + 1);
      datesRange.push(new Date(startDate));
    }
    const getData = async (datesRange: Date[]) => {
      const setData = await props.onReservations(datesRange);
      dispatch(reservationActions.setActualData(await setData));
    };
    getData(datesRange);
  }, [value]);
  console.log(checkIn, checkOut);
  console.log(value);
  return (
    <div className="box-border flex bg-hero-rooms-2 h-auto ">
      <div className="box-border bg-black bg-opacity-20 h-auto pb-9  flex flex-col ">
        <div className=" xl:flex-row xl:h-screen xl:py-0 xl:px-32 md:px-12 box-border w-full flex flex-col h-auto py-9 px-2  justify-center items-center sm:gap-5 xl:gap-12 gap-20  text-white">
          <div className="flex flex-col ">
            <span className="2xl:text-7xl justify-center sm:px-0 sm:text-5xl px-4 text-3xl sm:mb-20 mb-10 flex flex-row gap-2 font-radley  text-gold items-center">
              <span>Sapphire</span>
              <img src="/assets/logo.svg" className="2xl:w-36 w-12" />
              <span>Palace</span>
            </span>
            <span className="md:px-0 sm:text-2xl text-basic text-center font-poppins  sm:px-12 px-6">
              We invite you to check out our room selection, which includes
              single, double, triple rooms and suites. To make a reservation,
              simply select your preferred room from our chart available on the
              right-hand side. Below are the descriptions of each of our rooms,
              designed with the utmost comfort and relaxation in mind for our
              guests. Don't wait, book your dream stay at Sapphire Palace today!
            </span>
          </div>
          <div className="flex flex-col gap-7 w-auto items-center">
            <Schema />
            <div className="xl:p-0 pb-32 flex sm:flex-row flex-col px-0 justify-between font-poppins gap-7 sm:w-full w-full relative">
              <div className="bg-aquaButton flex flex-col sm:w-full w-full px-6 rounded-3xl justify-center ">
                {showCalendar && (
                  <div className="bg-aquaButton flex rounded-3xl w-full absolute top-0 left-0">
                    <Calendar
                      onChange={onChange}
                      value={value}
                      locale="en"
                      selectRange="true"
                      minDate={new Date()}
                    />
                  </div>
                )}
                <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl  py-4 border-gold border-b-2 text-center ">
                  {checkIn}
                </span>
                <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                  Check-in
                </span>
              </div>
              <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
                <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl py-4 border-gold border-b-2 text-center">
                  {checkOut}
                </span>
                <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                  Check-out
                </span>
              </div>
              {!showCalendar && (
                <div
                  className="bg-aquaButton flex justify-center items-center  w-full px-10 rounded-3xl hover:cursor-pointer"
                  onClick={() => setShowCalendar(true)}
                >
                  <img
                    src="/assets/calendar-regular-240.png"
                    className="h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Reservations;
