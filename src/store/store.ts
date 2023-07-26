import { configureStore } from '@reduxjs/toolkit';
import { burgerStatusReducer } from './slice/burgerStatus';

export const store = configureStore({
  reducer: {
    burgerStatus: burgerStatusReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;