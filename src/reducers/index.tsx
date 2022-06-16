import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import ReduxStorage from 'src/models/storage';

export const reduxStorage = configureStore({
  reducer: {},
});

export type AppDispatch = typeof reduxStorage.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
