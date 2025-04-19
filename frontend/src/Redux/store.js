import { configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducer/cityReducer'; 
import itineraryReducer from './reducer/itineraryReducer'; 

const store = configureStore({
  reducer: {
    cities: cityReducer,
    itineraries: itineraryReducer
  }
});

export default store;
