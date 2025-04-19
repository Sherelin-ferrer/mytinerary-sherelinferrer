import { createAsyncThunk,  createAction } from '@reduxjs/toolkit';

 const fetchItinerariesByCity = createAsyncThunk(
  'itineraries/fetchByCity',
  async (cityName, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityName}`);
      
      if (!response.ok) {
        if (response.status === 404) return { success: false, response: [] };
        throw new Error('Server error');
      }
      
      const data = await response.json();
      
      // Asegura que la respuesta tenga el formato correcto
      if (!data.success || !Array.isArray(data.response)) {
        return { success: false, response: [] };
      }
      
      return data;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleLike = createAction('itinerary/toggleLike');

export default fetchItinerariesByCity