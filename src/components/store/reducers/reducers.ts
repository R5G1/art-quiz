import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nameArray } from '../../Data/nameArray';

import type { RootState } from '../store';

interface Iarray {
  name: string;
  number: number;
}

interface InameDate {
  array: Iarray[];
}

const initialState: any = {
  array: nameArray,
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<Iarray[]>) => {
      state.array = action.payload;
      // {
      //   return [...state].push(action.payload);
      // }
    },
  },
});

export const { addState } = counterSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
