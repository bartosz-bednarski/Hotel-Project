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
      dispatch(
        reservationActions.setActualReservationsForDateRange(await setData)
      );
    };
    getData(datesRange);
  }, [value]);
  console.log(checkIn, checkOut);
  console.log(value);
  return (
    <div className="box-border flex bg-hero-rooms-2 h-screen w-full">
      <div className="box-border bg-black bg-opacity-20 h-auto pb-0  flex flex-col w-full">
        <div className=" xl:flex-col xl:h-screen xl:py-0 xl:px-32 md:px-12 box-border w-full flex flex-col h-auto py-5 px-2  justify-center items-center sm:gap-5 xl:gap-12 gap-20  text-white">
          <div className="flex flex-row w-full justify-between">
            <div>hello there img</div>
            <Schema />
          </div>
          <div className="flex flex-row w-full justify-between">
            <div>hello description</div>
            <div className="flex flex-col w-5/12 gap-8">
              <div className="flex flex-row relative w-full  gap-4">
                <div className="bg-aquaButton flex flex-col sm:w-full w-full px-6 rounded-3xl justify-center  ">
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
                  <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl  py-2 border-gold border-b-2 text-center ">
                    {checkIn}
                  </span>
                  <span className="sm:text-2xl desktop:text-2xl xl:text-lg text-base text-center py-2">
                    Check-in
                  </span>
                </div>
                <div className="bg-aquaButton flex flex-col  w-full px-6 rounded-3xl justify-center">
                  <span className=" sm:text-4xl desktop:text-4xl xl:text-2xl text-xl py-2 border-gold border-b-2 text-center">
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
                      className="h-24"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-row w-full bg-schemaBackgound gap-10 justify-between items-center text-black rounded-3xl px-6 py-6">
                <div className="flex flex-col w-6/12  text-2xl font-poppins">
                  <div className="flex flex-row justify-between ">
                    <span className="text-grey">Room type</span>
                    <span className="">Apartment</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-grey">Room number</span>
                    <span className="">14</span>
                  </div>
                  <div className="flex flex-row justify-between ">
                    <span className="text-grey">Price per night</span>
                    <span className="">50$</span>
                  </div>
                </div>
                <button className="mx-auto text-2xl bg-aquaButton h-min py-3 px-6 rounded-xl text-white">
                  Reservation
                </button>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-col gap-7 w-auto items-center">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default Reservations;
