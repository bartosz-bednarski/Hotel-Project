import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import schemaSlice from "./schema-slice";
import reservations from "./reservations-slice";
const store = configureStore({
  reducer: {
    schemaReducer: schemaSlice,
    reservationsReducer: reservations,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
