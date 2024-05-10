import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/favoritesReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
