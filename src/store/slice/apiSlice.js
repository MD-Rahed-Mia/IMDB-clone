import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "home",
  initialState: {
    url: {},
    genres: {},
    trending: null,
    latest: null,
  },
  reducers: {
    getApiConfig: (state, action) => {
      state.url = action.payload;
    },

    trendingMovies: (state, action) => {
      state.trending = action.payload;
    },

    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    latest: (state, action) => {
      state.latest = action.payload;
    },
  },
});

export const { getApiConfig, getGenres, trendingMovies, latest } =
  apiSlice.actions;
export default apiSlice.reducer;
