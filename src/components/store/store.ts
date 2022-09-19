import { configureStore } from '@reduxjs/toolkit';
import arrayQustions from './reducers/reducersQustions';
import arrayPictures from './reducers/reducersPictures';
import mainAarray from './reducers/reducerMainArray';
const store = configureStore({
  reducer: {
    counter: arrayQustions,
    counterP: arrayPictures,
    arrayImages: mainAarray,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
