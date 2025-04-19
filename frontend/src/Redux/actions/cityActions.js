import { createAsyncThunk } from '@reduxjs/toolkit';

// Acción asíncrona para cargar ciudades
export const fetchCities = createAsyncThunk(
  'cities/fetchCities', 
  async () => {
    const response = await fetch('http://localhost:8080/api/cities');
    console.log("peticion de cities exitosa")
    const data = await response.json();
    return data.data;
  }
);