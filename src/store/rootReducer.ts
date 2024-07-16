
import { combineReducers } from '@reduxjs/toolkit';
import carsListReducer from './slices/carsListSlice';

export const rootReducer = combineReducers({
  cars: carsListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;