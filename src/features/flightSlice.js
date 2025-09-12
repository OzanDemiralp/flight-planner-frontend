import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Flights } from '../api/FlightPlannerAPI';

export const fetchFlightData = createAsyncThunk(
  'flight/fetchFlightData',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await Flights(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const FlightSlice = createSlice({
  name: 'flights',
  initialState: {
    result: null,
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFlightData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
        state.result = null;
      })
      .addCase(fetchFlightData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.result = action.payload;
      })
      .addCase(fetchFlightData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload?.message || 'Request Failed';
        state.result = null;
      });
  },
});

export default FlightSlice.reducer;
