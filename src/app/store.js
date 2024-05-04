import { configureStore, configures, getDefaultMiddleware } from  "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"

// setting up the redux store
export default configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});