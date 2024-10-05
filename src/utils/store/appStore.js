import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";

const appStore = configureStore({
  reducer: {
    notes: notesSlice,
  },
});

export default appStore;