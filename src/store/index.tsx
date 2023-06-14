import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import reservations, { reservationActions } from "./reservations-slice";
const store = configureStore({
  reducer: {
    reservationsReducer: reservations,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          "reservationActions.setActualReservationsForDateRange",
        ],
        // Ignore these field paths in all actions
        ignoredActionPaths: ["payload, payload.body"],
        // Ignore these paths in the state
        ignoredPaths: ["payload"],
      },
    }),
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
