import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import images from '../../Data/ImagesInfo';

import type { RootState } from '../store';

interface Iarray {
  author: string;
  name: string;
  year: string;
  imageNum: string;
  check: boolean;
}

interface InameDate {
  array: Iarray[];
}

const storageMainAarray = JSON.parse(localStorage.getItem('storageMainAarray') || 'false');

const initialState: InameDate = {
  array: storageMainAarray ? storageMainAarray : images,
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addMainAarray: (state, action: PayloadAction<Iarray[]>) => {
      state.array = action.payload;
      localStorage.setItem('storageMainAarray', JSON.stringify(state.array));
    },
  },
});

export const { addMainAarray } = counterSlice.actions;

export default counterSlice.reducer;
