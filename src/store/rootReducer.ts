
import { combineReducers } from '@reduxjs/toolkit';


export const rootReducer = combineReducers({
    name: 'carsList'
})

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;