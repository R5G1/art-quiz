import { configureStore } from '@reduxjs/toolkit';
import arrayQustions from './reducers/reducersQustions';
import arrayPictures from './reducers/reducersPictures';
const store = configureStore({
  reducer: {
    counter: arrayQustions,
    counterP: arrayPictures,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
