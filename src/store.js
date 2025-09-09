import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './features/FlightSlice';
import citiesReducer from './features/CitiesSlice';

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    cities: citiesReducer,
  },
});
