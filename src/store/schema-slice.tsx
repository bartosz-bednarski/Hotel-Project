import { createSlice } from "@reduxjs/toolkit";
const schemaInitialState: any = {
  array: [],
};

const schema = createSlice({
  name: "schema",
  initialState: schemaInitialState,
  reducers: {
    addData(state, action) {
      state.array = action.payload;
    },
  },
});

export const schemaActions = schema.actions;
export default schema.reducer;
