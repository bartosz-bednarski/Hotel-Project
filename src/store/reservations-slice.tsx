import { reservationsInitialState } from "@/types/reservations-redux";
import { createSlice } from "@reduxjs/toolkit";

const reservationsInitialState: reservationsInitialState = {
  dateRange: [],
  room: {
    id: "",
    number: "",
    type: "",
    price: 0,
  },
  actualReservationsForDateRange: [
    {
      _id: new Date().toString(),
      rooms: [
        {
          id: "",
          number: "",
          type: "",
          price: 0,
          firstName: "",
          secondName: "",
          email: "",
          phoneNumber: "",
        },
      ],
    },
  ],
  occupiedRooms: [],
  roomsForSchema: [
    {
      id: "single-01",
      status: "free",
    },
    {
      id: "single-02",
      status: "free",
    },
    {
      id: "single-03",
      status: "free",
    },
    {
      id: "single-04",
      status: "free",
    },
    {
      id: "single-05",
      status: "free",
    },
    {
      id: "single-06",
      status: "free",
    },
    {
      id: "single-07",
      status: "free",
    },
    {
      id: "single-08",
      status: "free",
    },
    {
      id: "single-09",
      status: "free",
    },
    {
      id: "double-01",
      status: "free",
    },
    {
      id: "double-02",
      status: "free",
    },
    {
      id: "double-03",
      status: "free",
    },
    {
      id: "double-04",
      status: "free",
    },
    {
      id: "double-05",
      status: "free",
    },
    {
      id: "double-06",
      status: "free",
    },
    {
      id: "double-07",
      status: "free",
    },
    {
      id: "double-08",
      status: "free",
    },
    {
      id: "double-09",
      status: "free",
    },
    {
      id: "double-10",
      status: "free",
    },
    {
      id: "king-01",
      status: "free",
    },
    {
      id: "king-02",
      status: "free",
    },
    {
      id: "apartment-01",
      status: "free",
    },
  ],
};
const reservations = createSlice({
  name: "reservations",
  initialState: reservationsInitialState,
  reducers: {
    setDateRange(state, action) {
      state.roomsForSchema = reservationsInitialState.roomsForSchema;
      state.dateRange.splice(0);
      let startDate = new Date(action.payload[0]);
      let endDate = new Date(action.payload[action.payload.length - 1]);
      while (startDate < endDate) {
        startDate.setDate(startDate.getDate() + 1);
        state.dateRange.push(new Date(startDate)).toString();
      }
    },
    setRooms(state, action) {
      state.room.id = action.payload.id;
      state.room.number = action.payload.number;
      state.room.type = action.payload.type;
      state.room.price = action.payload.price;
    },
    setActualReservationsForDateRange(state, action) {
      state.actualReservationsForDateRange = action.payload.body;
      const allRooms = [];
      for (let i = 0; i < action.payload.body.length; i++) {
        action.payload.body[i].rooms;
        for (let j = 0; j < action.payload.body[i].rooms.length; j++) {
          allRooms.push(action.payload.body[i].rooms[j].id);
        }
      }
      const uniq = [...new Set(allRooms)];
      state.occupiedRooms = uniq;
      for (let i = 0; i < state.roomsForSchema.length; i++) {
        for (let j = 0; j < uniq.length; j++) {
          if (state.roomsForSchema[i].id === uniq[j]) {
            state.roomsForSchema[i].status = "occupied";
          }
        }
      }
    },
  },
});

export const reservationActions = reservations.actions;
export default reservations.reducer;
