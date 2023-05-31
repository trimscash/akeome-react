import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import roulleterReducer from './roulleterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    roulleter: roulleterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
