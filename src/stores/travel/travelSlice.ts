import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchTrips } from './travelAPI';
import { TravelObject } from '../../constants/types';
import { RootState } from '../index';

interface PayloadObject {
  id: number;
  key: keyof TravelObject;
  value: boolean | number | string;
}

interface TravelState {
  value: TravelObject[];
  status: string;
}

const initialState: TravelState = {
  value: [],
  status: 'idle',
};

export const getTripsAsync = createAsyncThunk('travel/fetchTrips', async () => {
  const response = await fetchTrips();
  return response.data;
});

export const travelSlice = createSlice({
  name: 'travel',
  initialState,
  reducers: {
    manageProperty: (
      state: TravelState,
      action: PayloadAction<PayloadObject>
    ): TravelState | void => {
      console.log('manageProperty');
      const { id, key, value } = action.payload;
      if (!id || !key || !value) {
        return state;
      }

      if (Array.isArray(state.value)) {
        const cardFound = state.value.find((card) => card.id === id);
        if (!cardFound) {
          return state;
        }
        Object.assign(cardFound, { [key]: value });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTripsAsync.pending, (state: TravelState) => {
        state.status = 'loading';
      })
      .addCase(
        getTripsAsync.fulfilled,
        (state: TravelState, action: PayloadAction<TravelObject[]>) => {
          state.status = 'idle';
          state.value = action.payload;
        }
      );
  },
});

export const { manageProperty } = travelSlice.actions;

export const selectTrips = (state: RootState): TravelObject[] =>
  state.travel.value;
export const selectStatus = (state: RootState): string => state.travel.status;
export const selectTripsByGroup = (
  state: RootState,
  tag: string
): TravelObject[] => state.travel.value.filter((travel) => travel.tag === tag);
export const selectTripsByHighLight = (state: RootState): TravelObject[] =>
  state.travel.value.filter((travel) => travel.highlight === true);
export const selectTripsByUnHighLight = (state: RootState): TravelObject[] =>
  state.travel.value.filter((travel) => travel.highlight === false);

export default travelSlice.reducer;
