import { configureStore } from '@reduxjs/toolkit';
import arrayReducer from '../store/reducers/reducers';

const store = configureStore({
  reducer: {
    counter: arrayReducer,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
