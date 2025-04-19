import { createReducer } from "@reduxjs/toolkit";
import fetchItinerariesByCity from "../actions/itineraryActions.js";
import { toggleLike } from '../actions/itineraryActions.js'; 
const initialState = {
  itineraries: [],
  status: "idle",
  error: null,
  likes: {}, 
};

const itineraryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchItinerariesByCity.pending, (state) => {
      state.status = "loading";
    })
    .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.itineraries = action.payload.response;

      // Inicializar likes por cada itinerario
      action.payload.response.forEach(itinerary => {
        if (!(itinerary._id in state.likes)) {
          state.likes[itinerary._id] = 0;
        }
      });
    })
    .addCase(fetchItinerariesByCity.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.payload || action.error.message;
    })
    .addCase(toggleLike, (state, action) => {
      const itineraryId = action.payload;
      if (state.likes[itineraryId] !== undefined) {
        state.likes[itineraryId]++;
      } else {
        state.likes[itineraryId] = 1;
      }
    });
});

export default itineraryReducer;























/* import { createSlice } from '@reduxjs/toolkit';
import { fetchItinerariesByCity } from '../actions/itineraryActions';

const initialState = {
  byCity: {
    data: [],
    cityName: '',
    lastUpdated: null
  },
  status: 'idle',
  error: null,
  likes: {}
};

const itinerarySlice = createSlice({
  name: 'itineraries',
  initialState,
  reducers: {
    toggleLike(state, action) {
      const id = action.payload;
      state.likes[id] = (state.likes[id] || 0) + 1;
    },
    resetItineraries(state) {
      state.byCity.data = [];
      state.byCity.cityName = '';
      state.status = 'idle';
      state.error = null;
    },
    clearLikes(state) {
      state.likes = {};
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItinerariesByCity.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.byCity.cityName = action.meta.arg;
      })
      .addCase(fetchItinerariesByCity.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.byCity.data = action.payload.response;
        state.byCity.lastUpdated = new Date().toISOString();
        state.error = null;

        // Inicializa likes para nuevos itinerarios
        action.payload.response.forEach(it => {
          if (!state.likes[it._id]) {
            state.likes[it._id] = it.likes || 0;
          }
        });
      })
      .addCase(fetchItinerariesByCity.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { toggleLike, resetItineraries, clearLikes } = itinerarySlice.actions;
export default itinerarySlice.reducer; */