import { createReducer } from "@reduxjs/toolkit";
import {
  addToFavorites,
  removeFromFavorites,
} from "../actions/favoritesActions";

const initialState = {
  favorites: [],
};

const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToFavorites, (state, action) => {
      state.favorites.push(action.payload);
    })
    .addCase(removeFromFavorites, (state, action) => {
      state.favorites = state.favorites.filter(
        (song) => song.id !== action.payload
      );
    });
});

export default rootReducer;
