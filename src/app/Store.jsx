import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/users/UserSlice";
import movieReducer from "../features/movies/movieSlice"

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
