import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Cities } from '../api/CitiesAPI';

export const fetchCitiesData = createAsyncThunk(
  'cities/fetchCitiesData',
  async (formData, { rejectWithValue }) => {
    try {
      const data = await Cities(formData);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const CitiesSlice = createSlice({
  name: 'cities',
  initialState: {
    list: [], // burası artık list olacak
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCitiesData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCitiesData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.citiesData; // citiesData array’i list’e ata
        console.log(action.payload.citiesData);
      })
      .addCase(fetchCitiesData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default CitiesSlice.reducer;
