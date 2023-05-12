import { createSlice } from "@reduxjs/toolkit";
interface reservationsInitialState {
  dateRange: Date[];
  room: { id: string; number: string; type: string; price: number };
  dataToSend: [
    {
      [key: string]: {
        [id: string]: {
          id: string;
          number: string;
          type: string;
          checkIn: Date;
          checkOut: Date;
          price: number;
          // name: string;
          // surname: string;
          // email: string;
          // phoneNumber: number;
        };
      };
    }
  ];
}
const reservationsInitialState = {
  dateRange: [],
  room: {
    id: "",
    number: "",
    type: "",
    price: 0,
  },
  dataToSend: [
    {
      [new Date().toString()]: {
        ["id"]: {
          id: "",
          number: "",
          type: "",
          checkIn: "",
          checkOut: "",
          price: 0,
        },
      },
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
      state.room.type = action.payload.type;
      state.room.price = action.payload.price;
    },
    // setDataToSend(state, action) {
    //   state.dataToSend.splice(0);
    //   for (let i = 0; i < state.dateRange.length; i++) {
    //     // let key = state.dateRange[i];
    //     let key = new Date(state.dateRange[i] - 1)
    //       .toLocaleString()
    //       .slice(0, 10);
    //     // key.replaceAll(" ", "");
    //     // key.slice(0, 13);
    //     state.dataToSend.push({
    //       [key]: {
    //         [state.room.id]: {
    //           id: state.room.id,
    //           number: state.room.number,
    //           type: state.room.type,
    //           checkIn: state.dateRange[0],
    //           checkOut: state.dateRange[state.dateRange.length - 1],
    //           price: state.room.price,
    //           // name: action.payload.name,
    //           // surname: action.payload.surname,
    //           // email: action.payload.email,
    //           // phoneNumber: action.payload.phoneNumber,
    //         },
    //       },
    //     });
    //   }
    // },
  },
});

export const reservationActions = reservations.actions;
export default reservations.reducer;
