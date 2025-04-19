import { createSlice } from '@reduxjs/toolkit';
import { fetchCities } from '../actions/cityActions';

const initialState = {
  allCities: [],
  filteredCities: [],
  status: 'idle',
  error: null,
  search: '',
  selectedCity: null
};

const citySlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
      state.filteredCities = state.allCities.filter(city =>
        city.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCities = action.payload;
        state.filteredCities = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { setSearch, setSelectedCity } = citySlice.actions;
export default citySlice.reducer;