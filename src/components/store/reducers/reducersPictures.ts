import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { arrayPictures } from '../../Data/nameArray';

import type { RootState } from '../store';

interface Iarray {
  name: string;
  number: number;
  check: boolean;
}

interface InameDate {
  array: Iarray[];
}

const initialState: InameDate = {
  array: arrayPictures,
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addStatePictures: (state, action: PayloadAction<Iarray[]>) => {
      state.array = action.payload;
    },
  },
});

export const { addStatePictures } = counterSlice.actions;

export default counterSlice.reducer;
