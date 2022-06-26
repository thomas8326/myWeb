import { ReduxStorage } from 'src/models/redux-storage';
import resumeSlice from 'src/reducers/resume-slice';

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

export const reduxStorage = configureStore<ReduxStorage>({
    reducer: { resume: resumeSlice }
});

export type AppDispatch = typeof reduxStorage.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
