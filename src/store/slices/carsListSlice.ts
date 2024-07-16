
import { createSlice,PayloadAction } from '@reduxjs/toolkit'

import { CarsListState, Car } from '@/types/page'

const initialState: CarsListState = {
    cars: [],
    isLoading: false,
    carsError: null,
    carsSuccess: null,
  };
  
const carsListSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
      setIsLoading: (state: CarsListState, action: PayloadAction<boolean>) => {
        state.isLoading = action.payload;
      },
      getCarsList: (state: CarsListState, action: PayloadAction<Car[]>) => {
        state.isLoading = false;
        state.cars = action.payload;
      },
      setCarError: (state: CarsListState, action: PayloadAction<string>) => {
        state.carsError = action.payload;
      },
    },
  });
  
  export const { setIsLoading, setCarError, getCarsList } = carsListSlice.actions;
  export default carsListSlice.reducer;