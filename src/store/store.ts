import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import mapReducer from './slices/mapSlice';

const rootReducer = combineReducers({
   auth: authReducer,
   map: mapReducer
});

export const store = configureStore({
   reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
