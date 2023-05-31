import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

// Define a type for the slice state
interface RoulleterState {
  result: string;
}

// Define the initial state using that type
const initialState: RoulleterState = {
  result: 'あけましておめでとうございます！今年もよろしくお願いします！',
};

export const roulleterSlice = createSlice({
  name: 'roulleter',
  initialState,
  reducers: {
    shffule: (state) => {
      const array: string[] = state.result.split('');
      for (let i = array.length - 1; i > 0; i--) {
        //0 <= swapTarget < i
        const swapTarget = Math.floor(Math.random() * (i + 1)); //https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
        const temp = array[i];
        array[i] = array[swapTarget];
        array[swapTarget] = temp;
      }
      state.result = array.join('');
    },
  },
});

export const { shffule } = roulleterSlice.actions;

export const selectResult = (state: RootState) => state.roulleter.result;

export default roulleterSlice.reducer;
