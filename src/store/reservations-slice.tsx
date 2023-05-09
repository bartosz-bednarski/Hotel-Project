import { createSlice } from "@reduxjs/toolkit";
interface reservationsInitialState {
  dateRange: any[];
  room: { id: string; number: string };
  toPaymentData: [{ [key: string]: { id: string; number: string } }];
}
const reservationsInitialState = {
  dateRange: [],
  room: {
    id: "",
    number: "",
  },
  toPaymentData: [
    {
      [new Date().toString()]: { id: "", number: "" },
    },
  ],
};
const reservations = createSlice({
  name: "reservations",
  initialState: reservationsInitialState,
  reducers: {
    setDateRange(state, action) {
      state.dateRange.splice(0);
      let startDate = new Date(action.payload[0]);
      let endDate = new Date(action.payload[action.payload.length - 1]);
      while (startDate < endDate) {
        startDate.setDate(startDate.getDate() + 1);
        state.dateRange.push(new Date(startDate));
      }
    },
    setRooms(state, action) {
      state.room.id = action.payload.id;
      state.room.number = action.payload.number;
    },
    redirectToPayment(state) {
      state.toPaymentData.splice(0);
      for (let i = 0; i < state.dateRange.length; i++) {
        // let key = state.dateRange[i];
        let key = new Date(state.dateRange[i] - 1)
          .toLocaleString()
          .slice(0, 10);
        // key.replaceAll(" ", "");
        // key.slice(0, 13);
        state.toPaymentData.push({
          [key]: {
            id: state.room.id,
            number: state.room.number,
          },
        });
      }
    },
  },
});

export const reservationActions = reservations.actions;
export default reservations.reducer;
