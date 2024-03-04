import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./reducers/LoginSlice";
import { SignupSlice } from "./reducers/RegisterSlice";

const store = configureStore({
    reducer: {
        login: LoginSlice.reducer,
        signup: SignupSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false
        })
});

export default store;