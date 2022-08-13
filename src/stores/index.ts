import { configureStore } from '@reduxjs/toolkit';
import travelReducer from './travel/travelSlice';

export const store = configureStore({
  reducer: {
    travel: travelReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
