import { createSlice } from "@reduxjs/toolkit";
const reservationsInitialState = {
  dateRange: [],
  room: {
    id: "",
    number: "",
  },
  toPaymentData: [
    {
      date: { id: "", number: "" },
    },
  ],
};
const reservations = createSlice({
  name: "reservations",
  initialState: reservationsInitialState,
  reducers: {
    setDateRange(state, action) {
      state.dateRange = action.payload;
    },
    setRooms(state, action) {
      state.room.id = action.payload.id;
      state.room.number = action.payload.number;
    },
    redirectToPayment(state) {
      for (let i=0;i<=state.dateRange.length;i++) {
        state.toPaymentData.push({
            state.dateRange[i]:{ id: state.room.id, number: state.room.number }
        });
      }
    },
  },
});

export const reservationActions = reservations.actions;
export default reservations.reducer;
