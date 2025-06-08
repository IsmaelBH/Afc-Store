import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../api/authApi'; // correcto nombre y path
import authReducer from './slices/authSlice'; // contiene el setUser

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
