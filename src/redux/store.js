import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Change the import

export default configureStore({
  reducer: {
    user: userReducer, // Use 'user' instead of 'updateName'
  },
});