import { configureStore, configures, getDefaultMiddleware } from  "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import movieReducer from "../features/movie/movieSlice"

// setting up the redux store
export default configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});