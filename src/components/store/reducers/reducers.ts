import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nameDate } from '../../Data/DataMain';
import type { RootState } from '../store';

interface Iarray {
  name: string;
  number: number;
}

interface InameDate {
  nameDate: Iarray[];
}

const initialState: InameDate = {
  nameDate: [],
};

export const counterSlice = createSlice({
  name: 'array',
  initialState,
  reducers: {
    addState: (state, action: PayloadAction<Iarray[]>) => {
      state.nameDate = action.payload;
    },
  },
});

export const { addState } = counterSlice.actions;

// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
