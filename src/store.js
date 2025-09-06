import { configureStore } from '@reduxjs/toolkit';
import flightReducer from './features/flightSlice'; // default import

export const store = configureStore({
  reducer: {
    flight: flightReducer,
  },
});
