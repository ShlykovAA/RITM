import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from '../hooks';

const initialState: boolean = false;

const burgerStatusSlice = createSlice({
  name: 'burgerStatus',
  initialState,
  reducers: {
    changeBurgerStatus: (_, action) => {
      return action.payload;
    }
  }
});

export const {changeBurgerStatus} = burgerStatusSlice.actions;

export const burgerStatusReducer = burgerStatusSlice.reducer;

export const useBurgerStatusSelector = () => {
  return useAppSelector((state) => state.burgerStatus);
};